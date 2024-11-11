import React from 'react';
import '../styles/Mypage.css';
import BottomNav from '../components/BottomNav';
import MypageMore from './MypageMore';

function Mypage() {

    const showMore = () => {

    };

    return(
        <div className='Mypage'>
            <header>
                <p className='my-page'>마이페이지</p>
            </header>
            <main>
                <section className='my-container'>
                    <img className='profile' src='/images/profileImg.png'/>
                    <p className='name'>김소정</p>
                    <img className='more' src='/images/moreImg.png'/>
                </section>
                <p className='my-goal'>나의 목표</p>
                <section className='goal-container'>
                    <div className='goal this'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                    <div className='goal'>살 5kg 감량</div>
                </section>
                <div><img className='goal-more' src='/images/goal-moreImg.png'/></div>
            </main>
            <BottomNav/>
        </div>
    );
}

export default Mypage;