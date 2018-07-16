import {createStore, applyMiddleware, combineReducers} from 'redux';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(
  combineReducers({
    auth: authReducer
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

