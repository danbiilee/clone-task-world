import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubHeader from '../../components/Header/SubHeader';

const ProjectListBlock = styled.div`
  margin-top: 50px;
`;

const ProjectListPage = ({ projects }) => {
  const onCreate = () => {
    console.log('create project');
  };

  return (
    <ProjectListBlock>
      {/* <ul>
        {projects &&
          projects.map(item => (
            <Link key={item._id} to={`/${item._id}`}>
              {item.title}
            </Link>
          ))}
        <li onClick={onCreate}>프로젝트 생성하기!!!</li>
      </ul> */}
      <SubHeader projects={projects} />
    </ProjectListBlock>
  );
};

export default ProjectListPage;
