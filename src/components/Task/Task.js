import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { BsCardChecklist, BsChat } from 'react-icons/bs';
import { IoMdAttach } from 'react-icons/io';
import './Task.scss';
import Tag from '../Tag/Tag';
import Point from '../Point/Point';
import Checklist from '../Checklist/Checklist';

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

  return (
    <section className="Task">
      {tag && <Tag tag={tag} />}
      <header className="task-title-wrapper">
        <h4>
          {isDone ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          {title}
        </h4>
        <Point point={point} />
      </header>
      {chkList.length ? <Checklist chkList={chkList} /> : null}
      <div className="due-to">02월 23일에 시작</div>
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
