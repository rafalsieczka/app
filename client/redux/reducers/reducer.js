import {combineReducers} from 'redux';
import testReducer from './test';
import counterReducer from './counter';
import toDoReducer from './toDoList';

 export default  combineReducers({
     test: testReducer,
     counter: counterReducer,
     todos: toDoReducer
 });