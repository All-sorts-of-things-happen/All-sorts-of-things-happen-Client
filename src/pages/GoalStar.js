import React, { useState, useRef, useEffect } from 'react';
import GoalStarStyle from '../styles/GoalStar.module.css';
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import BottomNav from '../components/BottomNav';
import { FiEdit } from "react-icons/fi";

function GoalStar() {

    const [isFinishVisible, setIsFinishVisible] = useState(false);

    const handleStarClick = () => {
        console.log("Opening finish section"); // 디버깅 로그
        setIsFinishVisible(true);
    };

    const handleCloseClick = () => {
        console.log("Closing finish section"); // 디버깅 로그
        setIsFinishVisible(false);
    };

    useEffect(() => {
        console.log("isFinishVisible state:", isFinishVisible);
    }, [isFinishVisible]);




    const [dragging, setDragging] = useState(false);
    const [top, setTop] = useState(window.innerHeight - 40); // 초기 위치는 화면 하단에서 20px 위
    const [dragDirection, setDragDirection] = useState(null); // 드래그 방향을 추적
    const goallistRef = useRef(null);
    const initialTop = useRef(window.innerHeight - 20); // 초기 위치
    const timerRef = useRef(null);

    // 드래그 시작
    const handleMouseDown = (e) => {
        setDragging(true);
        initialTop.current = e.clientY; // 드래그 시작 지점 저장
    };

    // 드래그 중
    const handleMouseMove = (e) => {
        if (dragging) {
            const delta = e.clientY - initialTop.current; // 드래그 이동 거리 계산
            if (delta > 0) {
                setDragDirection('down'); // 아래로 드래그
            } else {
                setDragDirection('up'); // 위로 드래그
            }

            // 드래그가 위로 일 경우
            if (dragDirection === 'up') {
                goallistRef.current.style.backgroundColor = "#464642";
                if (top > window.innerHeight * 0.5) {
                    setTop(window.innerHeight * 0.5); // 위로 드래그하면 top이 50%로 변경
                } else if (top <= window.innerHeight * 0.5 && top > 100) {
                    setTop(100); // 두 번째 위로 드래그하면 top이 86px로 변경
                }
            }

            // 드래그가 아래로 일 경우
            if (dragDirection === 'down') {
                setTop(window.innerHeight - 40); 
                // 이전 타이머가 있으면 취소
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                }

                // 새로운 타이머 설정
                timerRef.current = setTimeout(() => {
                    console.log("n")
                    goallistRef.current.style.backgroundColor = "transparent";
                }, 500); // 500ms 후 배경색 변경
            }
        }
    };

    // 드래그 끝
    const handleMouseUp = () => {
        setDragging(false);
    };

    // 마우스 이벤트 리스너 추가
    useEffect(() => {
        if (dragging) {
            // 마우스 이동 이벤트
            document.addEventListener('mousemove', handleMouseMove);
            // 마우스 업 이벤트
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            // 이벤트 리스너 제거
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 정리
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging, dragDirection]);




    return (
        <div className={GoalStarStyle.GoalStar}>
            <header>
                <p className={GoalStarStyle.goalstar}>마이페이지</p>
            </header>
            <main className={GoalStarStyle.main} onClick={handleStarClick}>
                <div className={GoalStarStyle.starName}><p>천칭자리</p></div>
                <section className={GoalStarStyle.per}><p>100%</p><div className={GoalStarStyle.perline}><div></div></div></section>
                <section className={GoalStarStyle.starContainer}>
                    
                    <FaStar size={30} color='#F2FF62' className={GoalStarStyle.star1}/>
                    <FaStar size={30} color='#F2FF62' className={GoalStarStyle.star2}/>
                    <FaStar size={30} color='#F2FF62' className={GoalStarStyle.star3}/>
                    <FaStar size={30} color='#F2FF62' className={GoalStarStyle.star4}/>
                    <FaStar size={30} color='#F2FF62' className={GoalStarStyle.star5}/>
                    <FaStar size={30} color='#F2FF62' className={GoalStarStyle.star6}/>
                    <FaStar size={30} color='#F2FF62' className={GoalStarStyle.star7}/>
                    <svg width="100%" height="100%" viewBox="0 0 344 405" className={GoalStarStyle.lineContainer}>
                        <line x1="14.825581395348838%" y1="89.38271604938272%" x2="33.13953488372093%" y2="79.75308641975309%" stroke="#F2FF62" strokeWidth="2"  className={GoalStarStyle.line1}/>
                        <line x1="15.69767441860465%" y1="87.90123456790123%" x2="18.313953488372093%" y2="44.69135802469136%" stroke="#F2FF62" strokeWidth="2"  className={GoalStarStyle.line2}/>
                        <line x1="18.313953488372093%" y1="44.69135802469136%" x2="33.43023255813954%" y2="10.37037037037037%" stroke="#F2FF62" strokeWidth="2"  className={GoalStarStyle.line3}/>
                        <line x1="33.43023255813954%" y1="10.37037037037037%" x2="72.96511627906976%" y2="18.765432098765434%" stroke="#F2FF62" strokeWidth="2"  className={GoalStarStyle.line4}/>
                        <line x1="18.313953488372093%" y1="44.69135802469136%" x2="72.96511627906976%" y2="18.765432098765434%" stroke="#F2FF62" strokeWidth="2"  className={GoalStarStyle.line5}/>
                        <line x1="68.6046511627907%" y1="47.654320987654316%" x2="72.96511627906976%" y2="18.765432098765434%" stroke="#F2FF62" strokeWidth="2"  className={GoalStarStyle.line6}/>
                        <line x1="68.6046511627907%" y1="47.654320987654316%" x2="86.62790697674419%" y2="69.62962962962963%" stroke="#F2FF62" strokeWidth="2"  className={GoalStarStyle.line7}/>
                    </svg>

                </section>
            </main>
            {isFinishVisible && (
                <section className={GoalStarStyle.finish}>
                    <div className={GoalStarStyle.finishheader}>
                        <IoClose size={25} color="#ffffff" onClick={handleCloseClick}/>
                    </div>
                    <p className={GoalStarStyle.finishstar}>천칭자리</p>
                    <p className={GoalStarStyle.finishmessage}>
                        <span>장기목표 달성</span>을 축하드립니다!
                    </p>
                    <img src='/images/libra.png' className={GoalStarStyle.finishImg} alt="천칭자리" />
                </section>
            )}
            <BottomNav />
            <section ref={goallistRef} className={GoalStarStyle.goallist} style={{ top: `${top}px` }} onMouseDown={handleMouseDown}>
                <div className={GoalStarStyle.bar}></div>
                <FiEdit size={25} className={GoalStarStyle.edit}/>
                <p className={GoalStarStyle.p1}>장기목표</p>
                <p className={GoalStarStyle.p2}>살 5kg 감량</p>
                <section className={GoalStarStyle.per}><p>100%</p><div className={GoalStarStyle.perline}><div></div></div></section>
            </section>
        </div>
    );
}

export default GoalStar;