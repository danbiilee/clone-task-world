import React from 'react';
import Title from './Title';
import Task from './Task';
import './TaskList.scss';

const TaskList = () => {
  return (
    <>
      <section className="TaskList">
        <Title />
        <div className="task-wrapper">
          <Task />
          <Task />
          <Task />
        </div>
      </section>
    </>
  );
};

export default TaskList;
