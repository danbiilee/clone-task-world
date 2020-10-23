import { combineReducers } from 'redux';
import tasks from './tasks';
import members from './members';
import workspaces from './workspaces';
import projects from './projects';

const rootReducer = combineReducers({ members, workspaces, projects, tasks });

export default rootReducer;
