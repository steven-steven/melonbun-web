import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import axios from 'axios';
import itemReducer from './reducers/itemReducer';
import requestReducer from './reducers/requestReducer';
import profileReducer from './reducers/profileReducer';
import notificationReducer from './reducers/notificationReducer';

const rootReducer = combineReducers({
  itemReducer,
  requestReducer,
  profileReducer,
  notificationReducer,
})

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
