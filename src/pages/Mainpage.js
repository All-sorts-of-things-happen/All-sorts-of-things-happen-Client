import React, { useState } from "react";
import MainpageStyle from '../styles/Mainpage.module.css';
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import BottomNav from '../components/BottomNav';
import { FiEdit } from "react-icons/fi";

function Mainpage() {
    const [isExpanded, setIsExpanded] = useState(false); // 하단 바 상태
    const [dragPosition, setDragPosition] = useState(0); // 드래그 위치 상태
  
    const handleExpand = () => setIsExpanded(true); // 하단 바 확장
    const handleCollapse = () => setIsExpanded(false); // 하단 바 축소
  
    // 터치 드래그 시작
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const screenHeight = window.innerHeight;
      const newPosition = Math.max(0, screenHeight - touch.clientY);
      setDragPosition(newPosition);
    };
  
    // 터치 드래그 종료
    const handleTouchEnd = () => {
      if (dragPosition > window.innerHeight * 0.5) {
        setIsExpanded(true); // 절반 이상 드래그 시 확장
      } else {
        setIsExpanded(false); // 절반 이하 드래그 시 축소
      }
      setDragPosition(0); // 드래그 상태 초기화
    };

    return (
        <div className={MainpageStyle.GoalStar} onClick={handleExpand}>
            <header>
                <p className={MainpageStyle.goalstar}>별자리</p>
            </header>
            <main className={MainpageStyle.main}>
                <div className={MainpageStyle.starName}><p className={MainpageStyle.starNamep}>살 5kg 감량</p></div>
                <div className={MainpageStyle.starsubtitle}><p>천칭자리</p></div>
                <section className={MainpageStyle.per}><p>30%</p><div className={MainpageStyle.perline}><div></div></div></section>
                <section className={MainpageStyle.starContainer}>
                
                <FaStar size={30} color='#F2FF62' className={MainpageStyle.star1}/>
                <FaStar size={30} color='#F2FF62' className={MainpageStyle.star2}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none"  className={MainpageStyle.star3}>
                    <path d="M11.8226 6.98533C13.4592 4.05067 14.2768 2.58333 15.5 2.58333C16.7232 2.58333 17.5408 4.05067 19.1774 6.98533L19.601 7.74483C20.066 8.57925 20.2985 8.99646 20.6602 9.27158C21.0219 9.54671 21.474 9.64875 22.3781 9.85283L23.1996 10.0388C26.3771 10.7583 27.9646 11.1174 28.343 12.3328C28.7202 13.547 27.6378 14.8141 25.4717 17.3471L24.9111 18.002C24.2962 18.7214 23.9875 19.0818 23.8493 19.5261C23.7111 19.9717 23.7576 20.4522 23.8506 21.412L23.9359 22.2864C24.2627 25.6667 24.4267 27.3562 23.4373 28.1067C22.4479 28.8571 20.9599 28.1725 17.9865 26.8034L17.2153 26.4495C16.3706 26.0594 15.9482 25.8656 15.5 25.8656C15.0518 25.8656 14.6294 26.0594 13.7847 26.4495L13.0148 26.8034C10.0401 28.1725 8.55212 28.8571 7.56399 28.108C6.57329 27.3562 6.73733 25.6667 7.06412 22.2864L7.14937 21.4132C7.24237 20.4522 7.28887 19.9717 7.14937 19.5274C7.01245 19.0818 6.70374 18.7214 6.08891 18.0032L5.52833 17.3471C4.67738 16.3525 3.99367 15.5531 3.5 14.8754C2.73701 13.8278 2.42795 13.0708 2.65695 12.3328C3.03412 11.1174 4.62416 10.757 7.80166 10.0388L8.62316 9.85283C9.52604 9.64875 9.97683 9.54671 10.3398 9.27158C10.7027 8.99646 10.934 8.57925 11.399 7.74483L11.8226 6.98533Z" fill="#272727"/>
                    <path d="M28.343 12.3328C27.9646 11.1174 26.3771 10.7583 23.1996 10.0388L22.3781 9.85283C21.474 9.64875 21.0219 9.54671 20.6602 9.27158C20.2985 8.99646 20.066 8.57925 19.601 7.74483L19.1774 6.98533C17.5408 4.05067 16.7232 2.58333 15.5 2.58333C14.2768 2.58333 13.4592 4.05067 11.8226 6.98533L11.399 7.74483C10.934 8.57925 10.7027 8.99646 10.3398 9.27158C9.97683 9.54671 9.52604 9.64875 8.62316 9.85283L7.80166 10.0388C4.62416 10.757 3.03412 11.1174 2.65695 12.3328C2.42795 13.0708 2.73701 13.8278 3.5 14.8754M28.343 12.3328C28.7202 13.547 27.6378 14.8141 25.4717 17.3471L24.9111 18.002C24.2962 18.7214 23.9875 19.0818 23.8493 19.5261C23.7111 19.9717 23.7576 20.4522 23.8506 21.412L23.9359 22.2864C24.2627 25.6667 24.4267 27.3562 23.4373 28.1067C22.4479 28.8571 20.9599 28.1725 17.9865 26.8034L17.2153 26.4495C16.3706 26.0594 15.9482 25.8656 15.5 25.8656C15.0518 25.8656 14.6294 26.0594 13.7847 26.4495L13.0148 26.8034C10.0401 28.1725 8.55212 28.8571 7.56399 28.108C6.57329 27.3562 6.73733 25.6667 7.06412 22.2864L7.14937 21.4132C7.24237 20.4522 7.28887 19.9717 7.14937 19.5274C7.01245 19.0818 6.70374 18.7214 6.08891 18.0032L5.52833 17.3471C4.67738 16.3525 3.99367 15.5531 3.5 14.8754M28.343 12.3328C24.9545 13.7219 17.5419 16.3 15 15.5C12.4581 14.7 6.27421 14.7502 3.5 14.8754" stroke="#F2FF62" stroke-width="2"/>
                    <path d="M24 21L24.5 26.5L24 28L22 28.5L16.5 26.5C16.5 26 16 25.3 14 26.5C11.5 28 7.5 28.5 7 28C6.6 27.6 7.16667 22.5 7.5 20L3 14.5L16.5 15.5L28.5 12.5L27 15.5L24.5 18.5L24 21Z" fill="#F2FF62"/>
                </svg>
                <div className={MainpageStyle.now}><div className={MainpageStyle.nowunder}></div><p className={MainpageStyle.nowp}>진행 중</p></div>
                <svg width="30" height="30" viewBox="0 0 576 512" className={MainpageStyle.star4}>
                <path
                    fill="#303030"
                    stroke="#F2FF62"
                    strokeWidth="40"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
                </svg>
                <svg width="30" height="30" viewBox="0 0 576 512" className={MainpageStyle.star5}>
                <path
                    fill="#303030"
                    stroke="#F2FF62"
                    stroke-width="40"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
                </svg>
                <svg width="30" height="30" viewBox="0 0 576 512" className={MainpageStyle.star6}>
                <path
                    fill="#303030"
                    stroke="#F2FF62"
                    stroke-width="40"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
                </svg>
                <svg width="30" height="30" viewBox="0 0 576 512" className={MainpageStyle.star7}>
                <path
                    fill="#303030"
                    stroke="#F2FF62"
                    stroke-width="40"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
                </svg>
                    <svg width="100%" height="100%" viewBox="0 0 344 405" className={MainpageStyle.lineContainer}>
                        <line x1="14.825581395348838%" y1="89.38271604938272%" x2="33.13953488372093%" y2="79.75308641975309%" stroke="#F2FF62" strokeWidth="2"  className={MainpageStyle.line1}/>
                        <line x1="15.69767441860465%" y1="87.90123456790123%" x2="18.313953488372093%" y2="44.69135802469136%" stroke="#F2FF62" strokeWidth="2"  className={MainpageStyle.line2}/>
                        <line x1="18.313953488372093%" y1="44.69135802469136%" x2="33.43023255813954%" y2="10.37037037037037%" stroke="#F2FF62" strokeWidth="2"  className={MainpageStyle.line3}/>
                        <line x1="33.43023255813954%" y1="10.37037037037037%" x2="72.96511627906976%" y2="18.765432098765434%" stroke="#F2FF62" strokeWidth="2"  className={MainpageStyle.line4}/>
                        <line x1="18.313953488372093%" y1="44.69135802469136%" x2="72.96511627906976%" y2="18.765432098765434%" stroke="#F2FF62" strokeWidth="2"  className={MainpageStyle.line5}/>
                        <line x1="68.6046511627907%" y1="47.654320987654316%" x2="72.96511627906976%" y2="18.765432098765434%" stroke="#F2FF62" strokeWidth="2"  className={MainpageStyle.line6}/>
                        <line x1="68.6046511627907%" y1="47.654320987654316%" x2="86.62790697674419%" y2="69.62962962962963%" stroke="#F2FF62" strokeWidth="2"  className={MainpageStyle.line7}/>
                    </svg>
                </section>
                <div
                className={`${MainpageStyle.bottomSheet} ${
                    isExpanded ? MainpageStyle.expanded : ""
                }`}
                style={{
                    transform: `translateY(${isExpanded ? 0 : 100}%)`, // 위치 조정
                    transition: dragPosition === 0 ? "transform 0.3s ease" : "none", // 드래그 중엔 애니메이션 제거
                }}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >
                <div className={MainpageStyle.dragHandle}></div>
                <div className={MainpageStyle.bottomContent}>
                <h3>
        장기목표
        <FiEdit size={16} className={MainpageStyle.editIcon} />
        <svg width="100%" height="100%" viewBox="0 0 344 405" className={MainpageStyle.lineContainer}>
            <line x1="18.5px" y1="55px" x2="18.5px" y2="80px" stroke="#F2FF62" strokeWidth="1"  className={MainpageStyle.Line1}/>
            <line x1="18.5px" y1="86.5px" x2="18.5px" y2="111.5px" stroke="#F2FF62" strokeWidth="1"  className={MainpageStyle.Line2}/>
            <line x1="18.5px" y1="118.5px" x2="18.5px" y2="143px" stroke="#F2FF62" strokeWidth="1"  className={MainpageStyle.Line3}/>
            <line x1="18.5px" y1="150px" x2="18.5px" y2="174.5px" stroke="#F2FF62" strokeWidth="1"  className={MainpageStyle.Line4}/>
            <line x1="18.5px" y1="181.6px" x2="18.5px" y2="206.5px" stroke="#F2FF62" strokeWidth="1"  className={MainpageStyle.Line5}/>
            <line x1="18.5px" y1="213.5px" x2="18.5px" y2="238px" stroke="#F2FF62" strokeWidth="1"  className={MainpageStyle.Line6}/>
        </svg>
    </h3>
    <div className={MainpageStyle.goalTitle}>살 5kg 감량</div>
    <div className={MainpageStyle.progress}>
        <span className={MainpageStyle.progressText}>30%</span>
        <div className={MainpageStyle.progressBar}>
            <div className={MainpageStyle.progressFill}></div> {/* 진행률 바 */}
        </div>
    </div>

    <ul className={MainpageStyle.goalList}>
        {/* 완료된 목표 */}
        <li>
            <FaStar size={14} className={MainpageStyle.completedGoalIcon} />
            물 하루에 1L 마시기
        </li>
        <li>
            <FaStar size={14} className={MainpageStyle.completedGoalIcon} />
            30분 이상 홈트레이닝하기
        </li>

        {/* 미완성된 목표 */}
        <li>
            <FaStar size={14} className={MainpageStyle.incompleteGoalIcon} />
            군것질하지 않기
        </li>
        <li>
            <FaStar size={14} className={MainpageStyle.incompleteGoalIcon} />
            저녁은 6시 전에 먹기
        </li>
        <li>
            <FaStar size={14} className={MainpageStyle.incompleteGoalIcon} />
            6시 이후 금식
        </li>
        <li>
            <FaStar size={14} className={MainpageStyle.incompleteGoalIcon} />
            밥 먹기 전에 물 마시기
        </li>
        <li>
            <FaStar size={14} className={MainpageStyle.incompleteGoalIcon} />
            자기 전에 스쿼트 10개
        </li>
    </ul>
                </div>
                </div>
                {isExpanded && (
                <div
                    className={MainpageStyle.overlay}
                    onClick={handleCollapse}
                ></div>
                )}
            </main>
            <BottomNav />
        </div>
    );
}

export default Mainpage;