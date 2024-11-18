import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginStyle from '../styles/Login.module.css';
import Google from '../pages/Google';
import { clientId } from '../pages/config';


function Login({ onLoginSuccess }) {
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className={LoginStyle.Login}>
                <p>별일 다 있어</p>
                <div className={LoginStyle.loginContainer}>
                    <label>
                        <input name="email" placeholder="이메일 작성하기" />
                    </label>
                    <label>
                        <input name="password" placeholder="비밀번호 작성하기" />
                    </label>
                    <Link to="/Mainpage">
                        <button className={LoginStyle.loginBtn}>로그인</button>
                    </Link>
                </div>
                <div className={LoginStyle.line}>
                    <div></div>
                    <p>로그인 및 회원가입 하기</p>
                    <div></div>
                </div>
                <div className={LoginStyle.loginGoogle}>
                    <Google onLoginSuccess={onLoginSuccess} /> {/* Google 컴포넌트 사용 */}
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
