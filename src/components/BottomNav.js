import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BottomNav.css';

function BottomNav() {
    return (
        <div className="all-container">
            <nav className="bottom-nav">
                <ul>
                    <li>
                        <Link to="/">
                            <img src="/images/book.png" alt="Book" className="book-icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src="/images/star.png" alt="Star" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src="/images/person.png" alt="Persons" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default BottomNav;