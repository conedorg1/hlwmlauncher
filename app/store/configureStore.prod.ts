import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import { Store, State } from '../reducers/types';

const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: State): Store {
  return createStore(rootReducer, {appIcons:[], applications:[], showSettings:false}, enhancer);
}

export default { configureStore, history };
