import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import rewardReducer from './reducers/rewardReducer';
import taskReducer from './reducers/taskReducer';
import togglesReducer from './reducers/togglesReducer';

import { 
  applyMiddleware, 
  combineReducers, 
  createStore
} from 'redux';
import { loadAuthToken } from './local-storage';
import { reducer as formReducer } from 'redux-form';
import { refreshAuthToken, setAuthToken } from './actions/auth';

const store = createStore (
  combineReducers({
    auth: authReducer,
    form: formReducer,
    toggles: togglesReducer,
    taskLog: taskReducer,
    rewardLog: rewardReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if(authToken){
  store.dispatch(setAuthToken(authToken));
  store.dispatch(refreshAuthToken());
}

export default store;