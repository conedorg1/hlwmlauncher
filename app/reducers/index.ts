import { combineReducers } from 'redux';
import appIcons from './appIcons';
import applications from './applications';
import showSettings from './showSettings';
import { connectRouter } from 'connected-react-router';


const createRootReducer = (history: any) => combineReducers({router: connectRouter(history), appIcons, applications, showSettings});

export default createRootReducer;
