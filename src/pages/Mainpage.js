import React, { useState, useEffect, useRef } from "react";
import MainpageStyle from '../styles/Mainpage.module.css';
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import BottomNav from '../components/BottomNav';
import { FiEdit } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import goalsData from "../json/goalList.json"; // JSON 파일을 import
import allGoals from "../json/allGoals.json"
import { FaCircleCheck } from "react-icons/fa6";
import completedGoals from '../json/completedGoals.json';


function Mainpage() {
    const [isExpanded, setIsExpanded] = useState(false); // 하단 바 상태
    const [dragPosition, setDragPosition] = useState(0); // 드래그 위치 상태
    const [progress, setProgress] = useState(0); // 진행률 상태 (추가)
    const [starClicked, setStarClicked] = useState(Array(goalsData.shortTermGoals.length).fill(false)); // 별 클릭 상태 (추가)

    const handleExpand = () => setIsExpanded(true); // 하단 바 확장
    const handleCollapse = () => setIsExpanded(false); // 하단 바 축소

    const [isFinishVisible, setIsFinishVisible] = useState(false);
    const [inputs, setInputs] = useState([""]);
    const [longTermGoal, setLongTermGoal] = useState("");

    // 터치 및 마우스 드래그 시작
    const handleDragStart = (event) => {
        setDragPosition(event.touches ? event.touches[0].clientY : event.clientY);
    };

    // 터치 및 마우스 드래그 중
    const handleDragMove = (event) => {
        const currentY = event.touches ? event.touches[0].clientY : event.clientY;
        const screenHeight = window.innerHeight;
        const newPosition = Math.max(0, screenHeight - currentY);
        setDragPosition(newPosition);
    };

    // 터치 및 마우스 드래그 종료
    const handleDragEnd = () => {
        if (dragPosition > window.innerHeight * 0.5) {
            setIsExpanded(true); // 절반 이상 드래그 시 확장
        } else {
            setIsExpanded(false); // 절반 이하 드래그 시 축소
        }
        setDragPosition(0); // 드래그 상태 초기화
    };

    // 별 클릭 핸들러 (추가)
    const handleStarClick = (index) => {
        if (!starClicked[index]) {
            // 클릭되지 않은 별만 처리
            const updatedStars = [...starClicked];
            updatedStars[index] = true;
            setStarClicked(updatedStars);

            // 진행률 업데이트
            setProgress((prevProgress) => {
                const newProgress = Math.min(prevProgress + 14.5, 100);

                // progress가 100일 때 이벤트 실행
                if (newProgress === 100) {
                    handleCompleteEvent(); // 100%일 때 실행할 함수 호출
                }

                return newProgress;
            });
        }
    };

    // 100%일 때 실행할 함수
    const perlineRef = useRef(null);
    const mainRef = useRef(null);
    const setMainRef = useRef(null);
    const selectRef = useRef(null);
    const starContainerRef = useRef(null);
    const starContainer2Ref = useRef(null);

    const handleCompleteEvent = () => {
        if (perlineRef.current) {
            perlineRef.current.classList.add(MainpageStyle.perlineShadow);
            setIsFinishVisible(true);
        }
    };

    useEffect(() => {
        if (progress === 100) {
            handleCompleteEvent(); // 진행률이 100%일 때 이벤트 호출
        }
    }, [progress]); // progress 값이 변경될 때마다 실행

    // 다음 목표 설정ㄱㄱ
    const handleCloseClick = () => {
        setIsFinishVisible(false);
        // 별 자리 지우기 ***중요
        mainRef.current.style.display = 'none';
        goalsData.star = "게자리";
        goalsData.longTermGoal = "";
        goalsData.shortTermGoals = [""];
        setProgress(0);
        completedGoals.completedGoal.unshift(
            {
                "img-src": "/images/stardic.png",
                "goal": "살 5kg 감량"
            }
        );
        setMainRef.current.style.display = 'flex';
    };

    const addInput = () => {
        setInputs((prevInputs) => [...prevInputs, ""]); // 새로운 빈 input 추가
        goalsData.shortTermGoals.push(""); // 데이터에도 빈 값 추가
        // console.log(goalsData.shortTermGoals); // 디버깅용 로그
    };
    const handleInputChange = (index, newValue) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = newValue; // 해당 인덱스 값을 업데이트
        setInputs(updatedInputs); // 상태 갱신
        goalsData.shortTermGoals[index] = newValue; // 데이터 동기화
        // console.log(goalsData.shortTermGoals); // 디버깅용 로그
    };
    const handleLongGoalChange = (e) => {
        const newValue = e.target.value;
        setLongTermGoal(newValue); // 상태 업데이트
        goalsData.longTermGoal = newValue; // 데이터 동기화
        console.log(goalsData.longTermGoal); // 디버깅용 로그
    };
    const selectStar = (e) => {
        setMainRef.current.style.display = 'none';
        selectRef.current.style.display = 'flex';
        starContainerRef.current.style.display = 'none';
        starContainer2Ref.current.style.display = 'flex';
        allGoals.allGoal.unshift(goalsData.longTermGoal);
    }
    const final = (e) => {
        perlineRef.current.classList.remove(MainpageStyle.perlineShadow);
        setStarClicked(Array(goalsData.shortTermGoals.length).fill(false));
        selectRef.current.style.display = 'none';
        setMainRef.current.style.display = 'none';
        mainRef.current.style.display = 'flex';
    }

    return (
        <div className={MainpageStyle.GoalStar}>
            <header>
                <p className={MainpageStyle.goalstar}>별자리</p>
            </header>
            <main className={MainpageStyle.main} ref={mainRef}>
                <div className={MainpageStyle.starName}>
                    <p className={MainpageStyle.starNamep}>{goalsData.longTermGoal}</p>
                </div>
                <div className={MainpageStyle.starsubtitle}><p>{goalsData.star}</p></div>
                <section className={MainpageStyle.per}><p>{Math.floor(progress)}%</p><div className={MainpageStyle.perline} ref={perlineRef}>
                    <div
                        style={{
                            width: `${progress}%`,
                            backgroundColor: '#F2FF62',
                            height: '100%',
                        }}
                    ></div>
                </div></section>

                {/* 천칭자리 */}
                <section className={MainpageStyle.starContainer} ref={starContainerRef}>
                    {/* 별 이미지 리스트 */}
                    {starClicked.map((clicked, index) => (
                        <div
                            key={index}
                            onClick={() => handleStarClick(index)} // 클릭 이벤트 연결
                            className={MainpageStyle.starWrapper}
                            style={{
                                margin: `${10 * index}px auto`, // margin을 index에 따라 조정 가능
                            }}
                        >
                            {clicked ? (
                                // 클릭된 별 이미지
                                <img
                                    src="/images/클릭된 별.png" // 클릭된 별 이미지 경로
                                    alt={`클릭된 별 ${index + 1}`}
                                    className={MainpageStyle.clickedStarS}
                                    id={`star-${index + 1}`}
                                />
                            ) : (
                                // 클릭되지 않은 별 이미지
                                <img
                                    src="/images/안 반짝1.png" // 클릭되지 않은 별 이미지 경로
                                    alt={`클릭되지 않은 별 ${index + 1}`}
                                    className={MainpageStyle.unclickedStarS}
                                    id={`star-${index + 1}`}
                                />
                            )}

                        </div>
                    ))}

                    {/* 진행 중 텍스트 */}
                    <div className={MainpageStyle.now}
                        style={{
                            opacity: '0'
                        }}>
                        <div className={MainpageStyle.nowunder}></div>
                        <p className={MainpageStyle.nowp}>진행 중</p>
                    </div>

                    {/* 천칭자리 */}
                    <svg width="100%" height="100%" viewBox="0 0 344 405" className={MainpageStyle.lineContainer}>
                        <line
                            x1="14.825581395348838%"
                            y1="89.38271604938272%"
                            x2="33.13953488372093%"
                            y2="79.75308641975309%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line1}
                        />
                        <line
                            x1="15.69767441860465%"
                            y1="87.90123456790123%"
                            x2="18.313953488372093%"
                            y2="44.69135802469136%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line2}
                        />
                        <line
                            x1="18.313953488372093%"
                            y1="44.69135802469136%"
                            x2="33.43023255813954%"
                            y2="10.37037037037037%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line3}
                        />
                        <line
                            x1="33.43023255813954%"
                            y1="10.37037037037037%"
                            x2="72.96511627906976%"
                            y2="18.765432098765434%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line4}
                        />
                        <line
                            x1="18.313953488372093%"
                            y1="44.69135802469136%"
                            x2="72.96511627906976%"
                            y2="18.765432098765434%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line5}
                        />
                        <line
                            x1="68.6046511627907%"
                            y1="47.654320987654316%"
                            x2="72.96511627906976%"
                            y2="18.765432098765434%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line6}
                        />
                        <line
                            x1="68.6046511627907%"
                            y1="47.654320987654316%"
                            x2="86.62790697674419%"
                            y2="69.62962962962963%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line7}
                        />
                    </svg>


                </section>

                <section className={MainpageStyle.starContainer2} ref={starContainer2Ref}>
                    {/* 별 이미지 리스트 */}
                    {starClicked.map((clicked, index) => (
                        <div
                            key={index}
                            onClick={() => handleStarClick(index)} // 클릭 이벤트 연결
                            className={MainpageStyle.starWrapper}
                            style={{
                                margin: `${10 * index}px auto`, // margin을 index에 따라 조정 가능
                            }}
                        >
                            {clicked ? (
                                // 클릭된 별 이미지
                                <img
                                    src="/images/클릭된 별.png" // 클릭된 별 이미지 경로
                                    alt={`클릭된 별 ${index + 1}`}
                                    className={MainpageStyle.clickedStarS}
                                    id={`star-${index + 11}`}
                                />
                            ) : (
                                // 클릭되지 않은 별 이미지
                                <img
                                    src="/images/안 반짝1.png" // 클릭되지 않은 별 이미지 경로
                                    alt={`클릭되지 않은 별 ${index + 1}`}
                                    className={MainpageStyle.unclickedStarS}
                                    id={`star-${index + 11}`}
                                />
                            )}

                        </div>
                    ))}

                    {/* 진행 중 텍스트 */}
                    <div className={MainpageStyle.now}
                        style={{
                            opacity: '0'
                        }}>
                        <div className={MainpageStyle.nowunder}></div>
                        <p className={MainpageStyle.nowp}>진행 중</p>
                    </div>

                    {/* 천칭자리 */}
                    <svg width="100%" height="100%" viewBox="0 0 344 405" className={MainpageStyle.lineContainer}>
                        <line
                            x1="18%"
                            y1="95%"
                            x2="28%"
                            y2="60%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line1}
                        />
                        <line
                            x1="28%"
                            y1="60%"
                            x2="27%"
                            y2="45%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line2}
                        />
                        <line
                            x1="27%"
                            y1="45%"
                            x2="20%"
                            y2="10%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line3}
                        />
                        <line
                            x1="27%"
                            y1="45%"
                            x2="42%"
                            y2="47%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line4}
                        />
                        <line
                            x1="42%"
                            y1="47%"
                            x2="48%"
                            y2="60%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line5}
                        />
                        <line
                            x1="28%"
                            y1="60%"
                            x2="48%"
                            y2="60%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line6}
                        />
                        <line
                            x1="48%"
                            y1="60%"
                            x2="70%"
                            y2="100%"
                            stroke="#F2FF62"
                            strokeWidth="2"
                            className={MainpageStyle.line7}
                        />
                    </svg>


                </section>

                <div
                    className={`${MainpageStyle.bottomSheet} ${isExpanded ? MainpageStyle.expanded : ""
                        }`}
                    style={{
                        transform: `translateY(${isExpanded ? 0 : 100}%)`, // 위치 조정
                    }}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                >
                    <div className={MainpageStyle.dragHandle}></div>
                    <div className={MainpageStyle.bottomContent}>
                        <h3>
                            장기목표
                            <FiEdit size={16} className={MainpageStyle.editIcon} color="#ffff" />
                        </h3>
                        <div className={MainpageStyle.goalTitle}></div>
                        <div className={MainpageStyle.progress}>
                            <span className={MainpageStyle.progressText}>{Math.floor(progress)}%</span>
                            <div className={MainpageStyle.progressBar}>
                                <div className={MainpageStyle.progressFill} style={{ width: `${progress}%` }}></div> {/* 진행률 바 */}
                            </div>
                        </div>

                        <ul className={MainpageStyle.goalList}>
                        </ul>
                        <ul className={MainpageStyle.gooal}>
                            {goalsData.shortTermGoals.map((goal, index) => (
                                <li key={index}>{goal}</li>
                            ))}
                        </ul>
                        {starClicked.map((clicked, index) => (
                            <div
                                key={index}
                                onClick={() => handleStarClick(index)} // 별 클릭 핸들러 연결
                                className={MainpageStyle.starWrapper}
                            >
                                {clicked ? (
                                    <img src="/images/클릭된 별.png" alt="클릭된 별" className={MainpageStyle.clickedStar} /> // 두 번째 이미지
                                ) : (
                                    <img src="/images/안 반짝2.png" alt="클릭되지 않은 별" className={MainpageStyle.unclickedStar} /> // 첫 번째 이미지
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {isExpanded && (
                    <div
                        className={MainpageStyle.overlay}
                        onClick={handleCollapse}
                    ></div>
                )}
            </main>


            <main className={MainpageStyle.setStar} ref={setMainRef}>
                <p className={MainpageStyle.longGoalP}>장기목표</p>
                <div className={MainpageStyle.longGoal}>
                    <input type="text" placeholder="장기목표을 입력하세요" value={longTermGoal} onChange={handleLongGoalChange} />
                </div>
                <p className={MainpageStyle.shortGoalP}>단기목표</p>
                <div className={MainpageStyle.shortGoal}>
                    {inputs.map((input, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={input} // 해당 인덱스의 값 사용
                                placeholder="단기목표를 입력하세요"
                                onChange={(e) => handleInputChange(index, e.target.value)} // 내용 변경 이벤트
                            />
                        </div>
                    ))}
                </div>
                <div className={MainpageStyle.checkbox}>
                    <FaCirclePlus size={50} color="#F2FF62" onClick={addInput} style={{ marginRight: '30px' }} />
                    <FaCircleCheck size={50} color="#F2FF62" onClick={selectStar} />
                </div>
            </main>


            <main className={MainpageStyle.select} ref={selectRef}>
                <p className={MainpageStyle.selectP}>별자리 선택하기</p>
                <div className={MainpageStyle.selectStarContainer}>
                    <article onClick={final}>
                        <img src="/images/게자리.png" />
                        <p>게자리</p>
                    </article>
                    <article onClick={final}>
                        <img src="/images/양자리.png" />
                        <p>양자리</p>
                    </article>
                    <article onClick={final}>
                        <img src="/images/백조자리.png" />
                        <p>백조자리</p>
                    </article>
                    <article onClick={final}>
                        <img src="/images/하프자리.png" />
                        <p>하프자리</p>
                    </article>
                    <article onClick={final}>
                        <img src="/images/세페우스자리.png" />
                        <p>세페우스자리</p>
                    </article>
                </div>
            </main>


            {isFinishVisible && (
                <section className={MainpageStyle.finish}>
                    <div className={MainpageStyle.finishheader}>
                        <IoClose size={25} color="#ffffff" onClick={handleCloseClick} />
                    </div>
                    <p className={MainpageStyle.finishstar}>{goalsData.star}</p>
                    <p className={MainpageStyle.finishmessage}>
                        <span>장기목표 달성</span>을 축하드립니다!
                    </p>
                    <img src='/images/libra.png' className={MainpageStyle.finishImg} alt="천칭자리" />
                </section>
            )}
            <BottomNav />
            <div className={MainpageStyle.box} onClick={handleExpand}></div>
        </div>
    );
}

export default Mainpage;