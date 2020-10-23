import React from 'react';
import SubHeader from '../../components/Header/SubHeader';
import TaskListWrapper from '../../components/Task';
import { getTask } from '../../modules/tasks';

const Project = () => {
  return (
    <section>
      <SubHeader />
      <TaskListWrapper />
      {/* 셋팅바<section></section> */}
    </section>
  );
};

export default Project;
