import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mypage from './pages/Mypage';
import MypageMore from './pages/MypageMore';
import StarDic from './pages/StarDic';
import GoalStar from './pages/GoalStar';
import Mainpage from './pages/Mainpage'
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/StarDic" element={<StarDic />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/MypageMore" element={<MypageMore />} />
        {/* <Route path="/" element={<GoalStar />} /> */}
        <Route path="/Mainpage" element={<Mainpage />} />
      </Routes>
    </div>
  ); 
}

export default App;