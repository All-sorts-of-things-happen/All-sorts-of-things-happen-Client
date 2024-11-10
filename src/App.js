import React from 'react';
import { Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BottomNav />} />
        <Route path="/login" element={<Login />} /> {/* 로그인 페이지 라우트 추가 */}
        {/* 다른 라우트들을 여기에 추가 */}
      </Routes>
    </div>
  );
}

export default App;