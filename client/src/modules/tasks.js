import * as api from '../api/tasks';
import {
  createPromiseThunk,
  createPromiseThunkById,
  handleAsyncActions,
  handleAsyncActionsById,
  stateUtils,
} from '../lib/asyncUtils';

// 액션 타입
// Task 목록 조회
const GET_TASKS = 'tasks/GET_TASKS';
const GET_TASKS_SUCCESS = 'tasks/GET_TASKS_SUCCESS';
const GET_TASKS_ERROR = 'tasks/GET_TASKS_ERROR';
// Task 하나 조회
const GET_TASK = 'tasks/GET_TASK';
const GET_TASK_SUCCESS = 'tasks/GET_TASK_SUCCESS';
const GET_TASK_ERROR = 'tasks/GET_TASK_ERROR';

// thunk 함수
export const getTasks = createPromiseThunk(GET_TASKS, api.getTasks);
export const getTask = createPromiseThunkById(GET_TASK, api.getTaskById);

// 초깃값
const initialState = {
  tasks: stateUtils.initial(),
  task: {},
};

// 리듀서
export default function tasks(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
    case GET_TASKS_SUCCESS:
    case GET_TASKS_ERROR:
      return handleAsyncActions(GET_TASKS, 'tasks', true)(state, action);
    case GET_TASK:
    case GET_TASK_SUCCESS:
    case GET_TASK_ERROR:
      return handleAsyncActionsById(GET_TASK, 'task', true)(state, action);
    default:
      return state;
  }
}
