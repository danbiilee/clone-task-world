import React, { useState } from 'react';
import { TiPencil, TiPlus, TiTimes } from 'react-icons/ti';
import { MdGroupAdd, MdLocalOffer } from 'react-icons/md';
import { ImCalendar } from 'react-icons/im';
import './Title.scss';
import {
  useTaskState,
  useTaskNextId,
  useTaskDispatch,
} from '../../reducers/TaskContext';

const Title = () => {
  const dispatch = useTaskDispatch();
  const tasks = useTaskState();
  const nextId = useTaskNextId();
  const [isActive, setIsActive] = useState(false);
  const undoneCnt = tasks.reduce((acc, cur) => acc + !cur.isDone, 0);

  const onToggle = () => {
    setIsActive(!isActive);
  };
  const onCreate = () => {};

  return (
    <>
      <header className="Title">
        <h3>메인페이지 분리하기</h3>
        <div className="btn-wrapper">
          <TiPencil />
          <TiPlus onClick={onToggle} />
          <TiTimes />
        </div>
        <div className="create-wrapper">
          <textarea placeholder="새 업무 만들기"></textarea>
          <div className="cr-btn-wrapper">
            <div className="cr-btn-l">
              <MdGroupAdd />
              <MdLocalOffer />
              <ImCalendar />
            </div>
            <div className="cr-btn-r">
              <button className="btn-cancel">취소</button>
              <button className="btn-create">만들기</button>
            </div>
          </div>
        </div>
      </header>
      <div className="tasklist-doing">진행 중인 업무 {undoneCnt}개</div>
    </>
  );
};

export default Title;
