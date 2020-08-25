import React from 'react';
import { TiPencil, TiPlus, TiTimes } from 'react-icons/ti';
import './Title.scss';

const Title = () => {
  return (
    <>
      <header className="Title">
        <h3>메인페이지 분리하기</h3>
        <div className="btn-wrapper">
          <TiPencil />
          <TiPlus />
          <TiTimes />
        </div>
      </header>
      <div className="tasklist-doing">진행 중인 업무 2개</div>
    </>
  );
};

export default Title;
