import React from 'react';
import TaskList from './TaskList';
import './index.scss';

const TaskListWrapper = () => {
  return (
    <div className="TaskListWrapper">
      <TaskList />
      {/* <TaskList />
      <TaskList />
      <TaskList /> */}
    </div>
  );
};

export default TaskListWrapper;
