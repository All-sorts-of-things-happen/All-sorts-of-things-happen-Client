import React from 'react';
import MypageMoreStyle from '../styles/MypageMore.module.css';

function MypageMore() {

    return(
        <div className={MypageMoreStyle.MypageMore}>
            <header>
                <p className={MypageMoreStyle.myPage}>마이페이지</p>
            </header>
            <div>
                <img className={MypageMoreStyle.logout} src='/images/logoutImg.png'/>
            </div>
        </div>
    );
}

export default MypageMore;