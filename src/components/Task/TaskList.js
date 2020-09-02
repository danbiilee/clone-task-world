import React from 'react';
import Title from './Title';
import Task from './Task';
import './TaskList.scss';
import { useTaskState } from '../../reducers/TaskContext';

const TaskList = () => {
  const tasks = useTaskState();
  return (
    <>
      <section className="TaskList">
        <Title />
        <div className="task-wrapper">
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TaskList;
