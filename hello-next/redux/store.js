import {createStore} from 'redux';
import { combineReducers } from 'redux'
import itemReducer from './reducers/itemReducer'
import requestReducer from './reducers/requestReducer'
import profileReducer from './reducers/profileReducer'

const rootReducer = combineReducers({
  itemReducer,
  requestReducer,
  profileReducer
})

export default createStore(rootReducer);
