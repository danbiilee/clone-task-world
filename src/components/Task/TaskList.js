import React from 'react';
import Title from './Title';
import Task from './Task';
import './TaskList.scss';

const TaskList = () => {
  return (
    <section className="TaskList">
      <Title />
      <Task />
    </section>
  );
};

export default TaskList;
