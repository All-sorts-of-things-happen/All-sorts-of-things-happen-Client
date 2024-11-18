import React from 'react';
import StarDicStyle from '../styles/StarDic.module.css'; // CSS 모듈 import
import BottomNav from '../components/BottomNav'; // BottomNav import
import completedGoals from '../json/completedGoals.json';

function StarDic() {
    return (
        <div className={StarDicStyle.allcontainer}>
            <header className={StarDicStyle.StarDicHeader}>
                <p className={StarDicStyle.title}>별 도감</p>
            </header>
            <main className={StarDicStyle.StarDicmain}>
                {/* completedGoal 배열을 맵핑하여 각 목표를 렌더링 */}
                {completedGoals.completedGoal.map((goalData, index) => (
                    <section key={index} className={`${StarDicStyle['image-section']} ${StarDicStyle[`image-${index + 1}`]}`}>
                        <img className={StarDicStyle.StarDicimg} src={goalData['img-src']} alt={`Star ${index + 1}`} />
                        <p className={StarDicStyle.StarDicp}>{goalData.goal}</p>
                    </section>
                ))}
            </main>
            <BottomNav />
        </div>
    );
}

export default StarDic;