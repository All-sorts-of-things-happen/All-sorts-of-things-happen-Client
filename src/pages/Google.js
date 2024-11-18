import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import GoogleStyle from '../styles/Google.module.css';

function Google({ onLoginSuccess }) {
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 사용

    const login = useGoogleLogin({
        onSuccess: (response) => {
            fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${response.access_token}`,
                },
            })
                .then((res) => res.json())
                .then((userInfo) => {
                    console.log('구글 사용자 정보:', userInfo);

                    // 부모 컴포넌트로 사용자 정보 전달
                    if (onLoginSuccess) onLoginSuccess(userInfo);

                    // 로그인 성공 후 Mainpage로 이동
                    navigate('/Mainpage');
                })
                .catch((error) => console.error('사용자 정보 가져오기 실패:', error));
        },
        onError: (error) => {
            console.error('구글 로그인 실패:', error);
            alert('구글 로그인에 실패했습니다. 다시 시도해주세요.');
        },
    });

    return (
        <button className={GoogleStyle.googleLoginButton} onClick={() => login()}>
            구글로 로그인하기
        </button>
    );
}

export default Google;
