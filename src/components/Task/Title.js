import React from 'react';
import { TiPencil, TiPlus, TiTimes } from 'react-icons/ti';
import './Title.scss';
import { useTaskState } from '../../reducers/TaskContext';

const Title = () => {
  const tasks = useTaskState();
  const undoneCnt = tasks.reduce((acc, cur) => acc + !cur.isDone, 0);
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
      <div className="tasklist-doing">진행 중인 업무 {undoneCnt}개</div>
    </>
  );
};

export default Title;
