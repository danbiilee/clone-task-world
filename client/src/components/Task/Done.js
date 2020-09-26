import React from 'react';
import './Done.scss';

const Done = ({ cnt, onToggle }) => {
  return (
    <div className="Done" onClick={onToggle}>
      완료된 업무 {cnt}개 보기
    </div>
  );
};

export default Done;
