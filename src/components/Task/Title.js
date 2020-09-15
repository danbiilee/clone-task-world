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
import AddMber from '../Add/AddMber';

const today = new Date().toISOString().substring(0, 10);

const Title = () => {
  const dispatch = useTaskDispatch();
  const tasks = useTaskState();
  let nextId = useTaskNextId();

  const textarea = useRef();
  const undoneCnt = tasks.reduce((acc, cur) => acc + !cur.isDone, 0);

  const [isActive, setIsActive] = useState(false);
  const [onMber, setOnMber] = useState(false);
  const [onTag, setOnTag] = useState(false);
  const [onDate, setOnDate] = useState(false);
  const [mberList, setMberList] = useState([]);

  const onToggle = type => {
    if (type === 'wrapper') {
      setIsActive(!isActive);
      if (onMber) setOnMber(!onMber);
      if (onTag) setOnTag(!onTag);
      if (onDate) setOnDate(!onDate);
    } else if (type === 'mber') {
      setOnMber(!onMber);
    } else if (type === 'tag') {
      setOnTag(!onTag);
    } else if (type === 'date') {
      setOnDate(!onDate);
    }
  };

  const handleMberList = mber => {
    const findMber = mberList.find(m => m.mberNo === mber.mberNo);
    if (findMber) {
      setMberList(mberList.filter(m => m.mberNo !== mber.mberNo));
    } else {
      setMberList(mberList.concat(mber));
    }
    setOnMber(!onMber);
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
        mberList,
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
    setMberList([]);
  };

  return (
    <>
      <header className="Title">
        <h3>메인페이지 분리하기</h3>
        <div className="btn-wrapper">
          <TiPencil />
          <TiPlus onClick={() => onToggle('wrapper')} />
          <TiTimes />
        </div>
        <div className={className('create-wrapper', { isActive: isActive })}>
          <textarea placeholder="새 업무 만들기" ref={textarea}></textarea>
          <div className="cr-btn-wrapper">
            <div className="cr-btn-l">
              <div className="badge-wrapper">
                {mberList.length > 0 && (
                  <span className="badge mber">{mberList.length}</span>
                )}
                <AddMber
                  onToggle={onToggle}
                  onMber={onMber}
                  selectedMberList={mberList}
                  handleMberList={handleMberList}
                />
              </div>
              <MdLocalOffer />
              <ImCalendar />
            </div>
            <div className="cr-btn-r">
              <button
                className="btn-cancel"
                onClick={() => onToggle('wrapper')}
              >
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
