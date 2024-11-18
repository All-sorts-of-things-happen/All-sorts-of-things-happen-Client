import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mypage from './pages/Mypage';
import MypageMore from './pages/MypageMore';
import StarDic from './pages/StarDic';
import GoalStar from './pages/GoalStar';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';

function App() {
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보를 관리하는 상태

  return (
    <div className='App'>
      <Routes>
        <Route
          path="/"
          element={<Login onLoginSuccess={(info) => setUserInfo(info)} />} 
        />
        <Route
          path="/StarDic"
          element={<StarDic userInfo={userInfo} />}
        />
        <Route
          path="/Mypage"
          element={<Mypage userInfo={userInfo} />}
        />
        <Route
          path="/MypageMore"
          element={<MypageMore userInfo={userInfo} />}
        />
        {/* <Route path="/" element={<GoalStar />} /> */}
        <Route
          path="/Mainpage"
          element={<Mainpage userInfo={userInfo} />}
        />
      </Routes>
    </div>
  );
}

export default App;
