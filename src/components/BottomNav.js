import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavStyle from '../styles/BottomNav.module.css';

function BottomNav() {
    return (
        <div className="all-container">
            <nav className={BottomNavStyle.bottomNav}>
                <ul>
                    <li>
                        <Link to="/StarDic">
                            <img src="/images/book.png" alt="Book" className={BottomNavStyle.bottomNavImg}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src="/images/star.png" alt="Star" className={BottomNavStyle.bottomNavImg}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Mypage">
                            <img src="/images/person.png" alt="Persons" className={BottomNavStyle.bottomNavImg}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default BottomNav;