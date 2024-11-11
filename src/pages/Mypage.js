import React from 'react';
import MypageStyle from '../styles/Mypage.module.css';
import BottomNav from '../components/BottomNav';

function Mypage() {

    const showMore = () => {

    };

    return(
        <div className={MypageStyle.Mypage}>
            <header>
                <p className={MypageStyle.myPage}>마이페이지</p>
            </header>
            <main className={MypageStyle.main}>
                <section className={MypageStyle.myContainer}>
                    <img className={MypageStyle.profile} src='/images/profileImg.png'/>
                    <p className={MypageStyle.name}>김소정</p>
                    <img className={MypageStyle.more} src='/images/moreImg.png'/>
                </section>
                <p className={MypageStyle.myGoal}>나의 목표</p>
                <section className={MypageStyle.goalContainer}>
                    <div className={`${MypageStyle.goal} ${MypageStyle.this}`}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>살 5kg 감량</div>
                </section>
                <div><img className={MypageStyle.goalMore} src='/images/goal-moreImg.png'/></div>
            </main>
            <BottomNav/>
        </div>
    );
}

export default Mypage;