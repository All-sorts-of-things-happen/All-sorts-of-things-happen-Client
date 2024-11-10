import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StarDic.css'; // CSS 파일 import
import BottomNav from '../components/BottomNav'; // BottomNav import

function StarDic() {
    return (
        <div className="all-container">
            <BottomNav />
            <header>
                <p className="title">별 도감</p>
            </header>
            <main>
                <section className="first-image">
                    <img src="/images/stardic.png" alt="First Star" />
                    <p>살 5kg 감량</p>
                </section>
                <section className="second-image">
                    <img src="/images/stardic.png" alt="Second Star" />
                    <p>살 5kg 감량</p>
                </section>
                <section className="third-image">
                    <img src="/images/stardic.png" alt="Third Star" />
                    <p>살 5kg 감량</p>
                </section>
            </main>
        </div>
    );
}

export default StarDic;