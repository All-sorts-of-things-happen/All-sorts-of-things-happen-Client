import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mypage from './pages/Mypage';
import MypageMore from './pages/MypageMore';
import StarDic from './pages/StarDic';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/StarDic" element={<StarDic />} />
        <Route path="/" element={<Mypage />} />
        <Route path="/MypageMore" element={<MypageMore />} />
      </Routes>
    </div>
  ); 
}

export default App;