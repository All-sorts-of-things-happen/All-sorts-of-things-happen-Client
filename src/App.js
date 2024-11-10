import React from 'react';
import { Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 기본 경로에서 로그인 페이지를 보이도록 설정 */}
        <Route path="/login" element={<Login />} /> {/* 로그인 페이지 */}
        <Route path="/" element={<Login />} /> {/* 기본 경로에서도 로그인 페이지 */}
        <Route path="/bottomnav" element={<BottomNav />} /> {/* BottomNav 페이지 */}
        {/* 다른 라우트들을 여기에 추가 */}
      </Routes>
    </div>
  );
}

export default App;