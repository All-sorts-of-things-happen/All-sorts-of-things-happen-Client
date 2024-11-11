import React from 'react';
import '../styles/MypageMore.css';

function MypageMore() {

    return(
        <div className='Mypage'>
            <header>
                <p className='my-page'>마이페이지</p>
            </header>
            <img className='logout' src='/images/logoutImg.png'/>
        </div>
    );
}

export default MypageMore;