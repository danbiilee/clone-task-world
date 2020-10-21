import { combineReducers } from 'redux';
import tasks from './tasks';
import members from './members';
import workspaces from './workspaces';

const rootReducer = combineReducers({ tasks, members, workspaces });

export default rootReducer;
