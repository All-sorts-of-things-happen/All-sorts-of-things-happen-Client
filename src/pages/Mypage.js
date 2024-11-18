import React from 'react';
import { Link } from 'react-router-dom';
import MypageStyle from '../styles/Mypage.module.css';
import BottomNav from '../components/BottomNav';

function Mypage({ userInfo }) {
    return (
        <div className={MypageStyle.Mypage}>
            <header>
                <p className={MypageStyle.myPage}>마이페이지</p>
            </header>
            <main className={MypageStyle.main}>
                <section className={MypageStyle.myContainer}>
                    <img
                        className={MypageStyle.profile}
                        src={userInfo?.picture || '/images/profileImg.png'}
                        alt="프로필"
                    />
                    <p className={MypageStyle.name}>{userInfo?.name || '사용자 이름'}</p>
                    <Link to="/MypageMore">
                        <img
                            className={MypageStyle.more}
                            src="/images/moreImg.png"
                            alt="더보기"
                        />
                    </Link>
                </section>
                <p className={MypageStyle.myGoal}>나의 목표</p>
                <section className={MypageStyle.goalContainer}>
                <div className={`${MypageStyle.goal} ${MypageStyle.this}`}>살 5kg 감량</div>
                    <div className={MypageStyle.goal}>주 3회 요가 하기</div>
                    <div className={MypageStyle.goal}>주 1회 새로운 레시피 도전하기</div>
                    <div className={MypageStyle.goal}>하루 한 끼는 채식</div>
                    <div className={MypageStyle.goal}>하루 2L 물 마시기</div>
                    <div className={MypageStyle.goal}>매일 일기 쓰기</div>
                    <div className={MypageStyle.goal}>주 2회 취미 활동하기</div>
                    <div className={MypageStyle.goal}>주말에 영화 한 편 보기</div>
                    <div className={MypageStyle.goal}>하루 스마트폰 사용 2시간 이하</div>
                    <div className={MypageStyle.goal}>주 1회 친구와 연락하기</div>
                    <div className={MypageStyle.goal}>잠자기 30분 전 디지털 기기 끄기</div>
                </section>
                <div>
                    <img
                        className={MypageStyle.goalMore}
                        src="/images/goal-moreImg.png"
                        alt="더보기"
                    />
                </div>
            </main>
            <BottomNav />
        </div>
    );
}

export default Mypage;
