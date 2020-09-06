import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { BsCardChecklist, BsChat } from 'react-icons/bs';
import { IoMdAttach } from 'react-icons/io';
import './Task.scss';
import Tag from '../Tag/Tag';
import Point from '../Point/Point';
import Checklist from '../Checklist/Checklist';
import Deadline from '../Deadline/Deadline';
import { useTaskDispatch } from '../../reducers/TaskContext';

const Task = ({ task }) => {
  const {
    title,
    isDone,
    tag,
    point,
    chkList,
    commentList,
    fileList,
    mberList,
    stDt,
    endDt,
  } = task;
  const cntChkList = chkList.reduce((acc, cur) => acc + cur.isDone, 0);
  const dispath = useTaskDispatch();
  const onToggle = () =>
    dispath({
      type: 'TOGGLE',
      id: task.id,
      updMber: 'danbi', // 업데이트 정보 임시 하드코딩
      updDt: '2020-09-06',
    });

  return (
    <section className="Task">
      {tag && <Tag tag={tag} />}
      <header className="task-title-wrapper">
        <h4>
          <span onClick={onToggle}>
            {isDone ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </span>
          {title}
        </h4>
        <Point point={point} />
      </header>
      {chkList.length ? <Checklist chkList={chkList} /> : null}
      {!stDt && !endDt ? null : <Deadline stDt={stDt} endDt={endDt} />}
      <div className="etc-wrapper">
        <span>
          <BsCardChecklist />
          {chkList.length ? `${cntChkList}/${chkList.length}` : 0}
        </span>
        <span>
          <BsChat /> {commentList.length}
        </span>
        <span>
          <IoMdAttach /> {fileList.length}
        </span>
      </div>
      <div className="mber-list">
        {mberList.map(mber =>
          React.createElement(mber.profile, { key: mber.mberNo }, null),
        )}
      </div>
    </section>
  );
};

export default Task;
