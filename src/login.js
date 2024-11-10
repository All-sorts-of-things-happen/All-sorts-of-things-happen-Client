import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './Login.css';
import LoginButton from './Google';
import { clientId } from './config';  // clientId 가져오기

function Login() {
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="Login">
                <p>별일 다 있어</p>
                <div className="login-container">
                    <label>
                        <input name="email" placeholder="이메일 작성하기" />
                    </label>
                    <label>
                        <input name="password" placeholder="비밀번호 작성하기" />
                    </label>
                    <button className="login-btn">로그인</button>
                </div>
                <div className="line">
                    <div></div>
                    <p>로그인 및 회원가입 하기</p>
                    <div></div>
                </div>
                <div className="login-google">
                    <LoginButton /> {/* 구글 로그인 버튼 */}
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;