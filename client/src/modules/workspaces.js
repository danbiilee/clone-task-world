import * as api from '../api/workspaces';
import {
  stateUtils,
  handleAsyncActions,
  createPromiseThunk,
} from '../lib/asyncUtils';

// Workspace 목록 조회
const GET_WKSPACES = 'members/GET_WKSPACES';
const GET_WKSPACES_SUCCESS = 'members/GET_WKSPACES_SUCCESS';
const GET_WKSPACES_ERROR = 'members/GET_WKSPACES_ERROR';
// Workspace 하나 조회

export const getWkspaces = createPromiseThunk(GET_WKSPACES, api.getWkspaces);

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
    default:
      return state;
  }
}
