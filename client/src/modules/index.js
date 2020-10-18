import { combineReducers } from 'redux';
import tasks from './tasks';
import members from './members';

const rootReducer = combineReducers({ tasks, members });

export default rootReducer;
