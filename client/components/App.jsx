import React from 'react';
import PropTypes from 'prop-types';
import {saveTest} from '../redux/reducers/test';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {button} from 'react-bootstrap';
import Nav from "../components/layout/Nav";
import Counter from '../components/Counter';
import ToDoList from '../components/ToDoList';
import {incrementCounter , decrementCounter} from '../redux/reducers/counter';
import {addToDoList , toggle} from '../redux/reducers/toDoList';

const mapStateToProps = (state) => {
  return {
      test: state.test,
      counter: state.counter,
      todos: state.todos
  };
} ;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      saveTest,
      incrementCounter,
      decrementCounter,
      addToDoList,
      toggle
  },dispatch);
};
const a = {data: 1};

class App extends React.Component {


componentWillMount() {
    this.props.saveTest(a); 
}

increment() {
  this.props.incrementCounter();
}

decrement() {
  this.props.decrementCounter();
}
add(data){
  this.props.addToDoList(data);
}
toggleToDoList(id){
  console.log('toggle')
  console.log(id)
  this.props.toggle(id);
}

  render() {
    return (
     <div>
        <Nav />
        <Counter 
          value={this.props.counter}
          onIncerment = {() => this.increment()} 
          onDecrement = {() => this.decrement()} />
        <ToDoList
          value={this.props.todos}
          addToList = {(data) => this.add(data)}
          Toggle = {(id) => this.toggleToDoList(id)}
        />
     </div>
    
);
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);
