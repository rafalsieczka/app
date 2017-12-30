import {combineReducers} from 'redux';
import testReducer from './test';
import counterReducer from './counter';

 export default  combineReducers({
     test: testReducer,
     counter: counterReducer

 });