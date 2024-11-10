import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { clientId } from './config';  // clientId 가져오기

function Google() {
    const handleLoginSuccess = (response) => {
        console.log('로그인 성공:', response);
    };
    
    const handleLoginError = (error) => {
        console.log('로그인 실패:', error);
    };

    return (
        <div className="Google">
            <GoogleLogin
                clientId={clientId} // clientId 전달
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
                useOneTap
            />
        </div>
    );
}

export default Google;
