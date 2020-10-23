import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../../modules/projects';
import styled from 'styled-components';

const ProjectListBlock = styled.div`
  margin-top: 50px;
`;

const ProjectListPage = () => {
  const dispatch = useDispatch();
  const { loading, data: projects, error } = useSelector(
    state => state.projects.projects,
  );

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  if (error) return <ProjectListBlock>에러 발생!</ProjectListBlock>;
  if (loading) return null;
  if (!loading && projects && !projects.length)
    return <ProjectListBlock>프로젝트 생성하기!!!</ProjectListBlock>;
  return (
    <ProjectListBlock>
      <ul>
        {projects && projects.map(item => <li key={item._id}>{item.title}</li>)}
      </ul>
    </ProjectListBlock>
  );
};

export default ProjectListPage;
