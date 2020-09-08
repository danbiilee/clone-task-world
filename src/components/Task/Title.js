import React, { useState, useRef } from 'react';
import { TiPencil, TiPlus, TiTimes } from 'react-icons/ti';
import { MdGroupAdd, MdLocalOffer, MdFace } from 'react-icons/md';
import { ImCalendar } from 'react-icons/im';
import className from 'classnames';
import './Title.scss';
import {
  useTaskState,
  useTaskNextId,
  useTaskDispatch,
} from '../../reducers/TaskContext';

const today = new Date().toISOString().substring(0, 10);

const Title = () => {
  const dispatch = useTaskDispatch();
  const tasks = useTaskState();
  let nextId = useTaskNextId();

  const textarea = useRef();
  const [isActive, setIsActive] = useState(false);
  const undoneCnt = tasks.reduce((acc, cur) => acc + !cur.isDone, 0);

  const onToggle = () => {
    setIsActive(!isActive);
  };
  const onCreate = () => {
    const title = textarea.current;
    dispatch({
      type: 'CREATE',
      task: {
        id: nextId.current,
        title: title.value,
        isDone: false,
        tag: null,
        point: null,
        chkList: [],
        commentList: [],
        fileList: [],
        mberList: [],
        stDt: null,
        endDt: null,
        finDt: null,
        regMber: {
          mberNo: 1,
          mberId: 'danbi',
          mberNm: '이단비',
          profile: MdFace,
        },
        regDt: today,
        updMber: null,
        updDt: null,
      },
    });
    nextId.current++;
    title.value = '';
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="Title">
        <h3>메인페이지 분리하기</h3>
        <div className="btn-wrapper">
          <TiPencil />
          <TiPlus onClick={onToggle} />
          <TiTimes />
        </div>
        <div className={className('create-wrapper', { isActive: isActive })}>
          <textarea placeholder="새 업무 만들기" ref={textarea}></textarea>
          <div className="cr-btn-wrapper">
            <div className="cr-btn-l">
              {/* <AddMber />
              <AddTag />
              <Calendar /> */}
              <MdGroupAdd />
              <MdLocalOffer />
              <ImCalendar />
            </div>
            <div className="cr-btn-r">
              <button className="btn-cancel" onClick={onToggle}>
                취소
              </button>
              <button className="btn-create" onClick={onCreate}>
                만들기
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="tasklist-doing">진행 중인 업무 {undoneCnt}개</div>
    </>
  );
};

export default Title;
