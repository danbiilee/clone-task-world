import React from 'react';
import SubHeader from '../../components/Header/SubHeader';
import TaskListWrapper from '../../components/Task';
import { getTask } from '../../modules/tasks';

const Project = ({ match }) => {
  const { id } = match.params;
  console.log('Project id', id);
  return (
    <section>
      123123123
      {/* <SubHeader />
      <TaskListWrapper /> */}
      {/* 셋팅바<section></section> */}
    </section>
  );
};

export default Project;
