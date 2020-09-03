import React from 'react';
import { MdCheckBoxOutlineBlank, MdFace } from 'react-icons/md';
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
  return (
    <section className="Task">
      {tag && <Tag tag={tag} />}
      <header className="task-title-wrapper">
        <h4>
          <MdCheckBoxOutlineBlank /> {title}
        </h4>
        <Point point={point} />
      </header>
      <Checklist />
      <div className="due-to">02월 23일에 시작</div>
      <div className="etc-wrapper">
        <span>
          <BsCardChecklist /> 1/3
        </span>
        <span>
          <BsChat /> 1
        </span>
        <span>
          <IoMdAttach /> 0
        </span>
      </div>
      <div className="mber-list">
        <MdFace />
      </div>
    </section>
  );
};

export default Task;
