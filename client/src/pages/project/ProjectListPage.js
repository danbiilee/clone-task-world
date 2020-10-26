import React from 'react';
import styled from 'styled-components';

const ProjectListBlock = styled.div`
  margin-top: 50px;
`;

const ProjectListPage = ({ projects }) => {
  return (
    <ProjectListBlock>
      <ul>
        {projects && projects.map(item => <li key={item._id}>{item.title}</li>)}
        <li>프로젝트 생성하기!!!</li>
      </ul>
    </ProjectListBlock>
  );
};

export default ProjectListPage;
