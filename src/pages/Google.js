import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Google() {
    const navigate = useNavigate(); // React Router로 페이지 이동

    const handleLoginSuccess = (credentialResponse) => {
        console.log('로그인 성공:', credentialResponse);
        const jwtToken = credentialResponse.credential; // JWT 토큰
        console.log('JWT Token:', jwtToken);

        // 로그인 성공 후 메인 페이지로 이동
        navigate('/Mainpage');
    };

    const handleLoginError = () => {
        console.error('로그인 실패');
        alert('구글 로그인에 실패했습니다. 다시 시도해주세요.');
    };

    return (
        <div className="Google">
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
                useOneTap
            />
        </div>
    );
}

export default Google;
