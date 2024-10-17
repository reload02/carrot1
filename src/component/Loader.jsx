import React, { useState, useEffect } from 'react';
import './Loader.css'; // 위에서 작성한 CSS 파일을 가져옴
import { useNavigate } from 'react-router-dom';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  // 3초 후에 로딩 종료를 가정 (테스트를 위한 타이머 설정)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{if(!loading)nav(-1)},[loading])

  return (
    <div className='load'>
      {loading ? (
        <div className="loader"></div> // 로딩 중일 때 스피너 표시
      ) : (
        <div>Content Loaded!</div>
        
         // 로딩 완료 후 표시될 내용
      )}
    </div>
  );
};

export default Loader;
