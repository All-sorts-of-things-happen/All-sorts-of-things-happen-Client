import React from 'react';
import MainpageStyle from '../styles/Mainpage.module.css'; // CSS 모듈 import

function Mainpage() {
    return (
        <div className={MainpageStyle.allcontainer}>
            <header className={MainpageStyle.StarDicHeader}>
                <p className={MainpageStyle.title}>별자리</p>
            </header>
            <main className={MainpageStyle.StarDicmain}>
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

export default Mainpage;