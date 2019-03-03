import {createStore} from 'redux';
import { combineReducers } from 'redux'
import itemReducer from './reducers/itemReducer'
import requestReducer from './reducers/requestReducer'

const rootReducer = combineReducers({
  itemReducer,
  requestReducer
})

export default createStore(rootReducer);
