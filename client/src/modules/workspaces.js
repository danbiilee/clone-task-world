import * as api from '../api/workspaces';
import {
  stateUtils,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseThunk,
  createPromiseThunkById,
} from '../lib/asyncUtils';

// Workspace 목록 조회
const GET_WKSPACES = 'workspaces/GET_WKSPACES';
const GET_WKSPACES_SUCCESS = 'workspaces/GET_WKSPACES_SUCCESS';
const GET_WKSPACES_ERROR = 'workspaces/GET_WKSPACES_ERROR';
// Workspace 하나 조회
const GET_WKSPACE = 'workspaces/GET_WKSPACE';
const GET_WKSPACE_SUCCESS = 'workspaces/GET_WKSPACE_SUCCESS';
const GET_WKSPACE_ERROR = 'workspaces/GET_WKSPACE_ERROR';

export const getWkspaces = createPromiseThunk(GET_WKSPACES, api.getWkspaces);
export const getWkspace = createPromiseThunkById(
  GET_WKSPACE,
  api.getWkspaceById,
);

const initialState = {
  workspaces: stateUtils.initial(),
  workspace: {},
};

// 리듀서
export default function wkspaces(state = initialState, action) {
  switch (action.type) {
    case GET_WKSPACES:
    case GET_WKSPACES_SUCCESS:
    case GET_WKSPACES_ERROR:
      return handleAsyncActions(
        GET_WKSPACES,
        'workspaces',
        true,
      )(state, action);
    case GET_WKSPACE:
    case GET_WKSPACE_SUCCESS:
    case GET_WKSPACE_ERROR:
      return handleAsyncActions(GET_WKSPACE, 'workspace', true)(state, action);
    default:
      return state;
  }
}
