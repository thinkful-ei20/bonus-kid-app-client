import authReducer from './reducers/authReducer';
import mainReducer from './reducers';
import rewardsReducer from './reducers/rewardReducer';
import taskReducer from './reducers/taskReducer';
import thunk from 'redux-thunk';

import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loadAuthToken} from './local-storage';
import {reducer as formReducer} from 'redux-form';
import {refreshAuthToken, setAuthToken} from './actions/auth';

const store = createStore (
  combineReducers({
    auth: authReducer,
    main: mainReducer,
    rewards: rewardsReducer,
    form: formReducer,
    tasks: taskReducer
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


// const authToken = loadAuthToken();
// if(authToken){
//   let token = authToken;
//   store.dispatch(setAuthToken(token));
//   store.dispatch(refreshAuthToken());
// }