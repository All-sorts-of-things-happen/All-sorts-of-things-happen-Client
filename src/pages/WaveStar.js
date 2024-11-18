import React from 'react';

const WaveStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      className="wave-star"
    >
      {/* 별 모양 */}
      <path
        d="M12 1.5l3.09 6.26 6.91 1-5 4.87 1.18 6.88-6.18-3.25-6.18 3.25L5 13.63 0 8.76l6.91-1L12 1.5z"
        fill="url(#half-fill)"
        mask="url(#wave-mask)"
      />

      {/* 색상 그라데이션 */}
      <defs>
        <linearGradient id="half-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F2FF62" />
          <stop offset="50%" stopColor="#F2FF62" />
          <stop offset="50%" stopColor="white" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>

        {/* 웨이브 경계 마스크 */}
        <mask id="wave-mask">
          {/* 상단 절반을 마스킹 */}
          <rect x="0" y="0" width="24" height="12" fill="white" />
          {/* 웨이브 패턴 */}
          <path
            d="M0 12 Q6 16, 12 12 T24 12"
            fill="black"
          />
        </mask>
      </defs>
    </svg>
  );
};

export default WaveStar;
