import React from 'react';
import MainpageStyle from '../styles/Mainpage.module.css'; // CSS 모듈 import
import BottomNav from '../components/BottomNav'; // BottomNav import

function StarDic() {
    return (
        <div className={StarDicStyle.allcontainer}>
            <header className={StarDicStyle.StarDicHeader}>
                <p className={StarDicStyle.title}>별 도감</p>
            </header>
            <main className={StarDicStyle.StarDicmain}>
                <section className={StarDicStyle['first-image']}>
                    <img className={StarDicStyle.StarDicimg} src="/images/stardic.png" alt="First Star" />
                    <p className={StarDicStyle.StarDicp}>살 5kg 감량</p>
                </section>
                <section className={StarDicStyle['second-image']}>
                    <img className={StarDicStyle.StarDicimg} src="/images/stardic2.png" alt="Second Star" />
                    <p className={StarDicStyle.StarDicp}>수학 90점</p>
                </section>
                <section className={StarDicStyle['third-image']}>
                    <img className={StarDicStyle.StarDicimg} src="/images/stardic3.png" alt="Third Star" />
                    <p className={StarDicStyle.StarDicp}>자격증 따기</p>
                </section>
            </main>
            <BottomNav />
        </div>
    );
}

export default StarDic;