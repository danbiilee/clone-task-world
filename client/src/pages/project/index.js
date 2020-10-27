import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { getLoginUser } from '../../modules/members';
import { getWkspaces, getWkspace } from '../../modules/workspaces';
import { getProjectsByWsId } from '../../modules/projects';
import Header from '../../components/Header/Header';
import ProjectPage from './ProjectPage';

const WorkspacePage = () => {
  const dispatch = useDispatch();
  const { data: loginUser } = useSelector(state => state.members.loginUser);
  const { data: wkspaces } = useSelector(state => state.workspaces.workspaces);
  const { data: wkspace } = useSelector(state => state.workspaces.workspace);
  const projects = useSelector(state => state.projects.projects);

  useEffect(() => {
    if (loginUser) {
      dispatch(getWkspaces());
      dispatch(getWkspace(loginUser.lastWkspaceId));
      return;
    }
    dispatch(getLoginUser());
  }, [dispatch, loginUser]);

  useEffect(() => {
    if (wkspace) {
      dispatch(getProjectsByWsId(wkspace._id));
    }
  }, [dispatch, wkspace]);

  return (
    <Router>
      <Header loginUser={loginUser} wkspaces={wkspaces} wkspace={wkspace} />
      <ProjectPage projects={projects} />
      {/* <Switch>
        <Route
          path="/ws"
          component={() => <ProjectListPage projects={projects} />}
        />
        <Route exact path="/ws/:id" component={ProjectPage} />
      </Switch> */}
    </Router>
  );
};

export default WorkspacePage;
