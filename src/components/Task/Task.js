import React from 'react';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import './Task.scss';
import Tag from '../Tag/Tag';
import Point from '../Point/Point';
import Checklist from '../Checklist/Checklist';

const Task = () => {
  return (
    <section className="Task">
      <Tag />
      <header className="task-title-wrapper">
        <h4>
          <MdCheckBoxOutlineBlank /> 대상자 분리
        </h4>
        <Point />
      </header>
      <Checklist />
    </section>
  );
};

export default Task;
