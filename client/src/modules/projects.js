import * as api from '../api/projects';
import {
  stateUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseThunk,
  createPromiseThunkById,
} from '../lib/asyncUtils';

// Project 목록 조회
const GET_PROJECTS = 'workspaces/GET_PROJECTS';
const GET_PROJECTS_SUCCESS = 'workspaces/GET_PROJECTS_SUCCESS';
const GET_PROJECTS_ERROR = 'workspaces/GET_PROJECTS_ERROR';
// Project 하나 조회
const GET_PROJECT = 'workspaces/GET_PROJECT';
const GET_PROJECT_SUCCESS = 'workspaces/GET_PROJECT_SUCCESS';
const GET_PROJECT_ERROR = 'workspaces/GET_PROJECT_ERROR';

export const getProjects = createPromiseThunkById(
  GET_PROJECTS,
  api.getProjects,
);
export const getProjectsByWsId = createPromiseThunkById(
  GET_PROJECTS,
  api.getProjectsByWsId,
);
export const getProject = createPromiseThunkById(
  GET_PROJECT,
  api.getProjectsByWsId,
);

const initialState = {
  projects: stateUtils.initial(),
  project: {},
};

// 리듀서
export default function wkspaces(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
    case GET_PROJECTS_SUCCESS:
    case GET_PROJECTS_ERROR:
      return handleAsyncActions(GET_PROJECTS, 'projects', true)(state, action);
    case GET_PROJECT:
    case GET_PROJECT_SUCCESS:
    case GET_PROJECT_ERROR:
      return handleAsyncActionsById(
        GET_PROJECT,
        'project',
        true,
      )(state, action);
    default:
      return state;
  }
}
