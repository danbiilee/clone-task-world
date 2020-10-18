import * as api from '../api/members';
import {
  stateUtils,
  handleAsyncActions,
  createPromiseThunk,
} from '../lib/asyncUtils';

// Member 목록 조회
const GET_MEMBERS = 'members/GET_MEMBERS';
const GET_MEMBERS_SUCCESS = 'members/GET_MEMBERS_SUCCESS';
const GET_MEMBERS_ERROR = 'members/GET_MEMBERS_ERROR';
// Member 하나 조회
const GET_MEMBER = 'members/GET_MEMBER';
const GET_MEMBER_SUCCESS = 'members/GET_MEMBER_SUCCESS';
const GET_MEMBER_ERROR = 'members/GET_MEMBER_ERROR';
// LOGIN_USER 조회(세션)
const GET_LOGIN_USER = 'members/GET_LOGIN_USER';
const GET_LOGIN_USER_SUCCESS = 'members/GET_LOGIN_USER_SUCCESS';
const GET_LOGIN_USER_ERROR = 'members/GET_LOGIN_USER_ERROR';

// export const getTasks = createPromiseThunk(GET_MEMBERS, );
// export const getTask = createPromiseThunkById(GET_MEMBER, );
export const getLoginUser = createPromiseThunk(
  GET_LOGIN_USER,
  api.getLoginUser,
);

const initialState = {
  members: stateUtils.initial(),
  member: {},
  loginUser: {},
};

// 리듀서
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_LOGIN_USER:
    case GET_LOGIN_USER_SUCCESS:
    case GET_LOGIN_USER_ERROR:
      return handleAsyncActions(GET_LOGIN_USER, 'loginUser')(state, action);
    default:
      return state;
  }
}
