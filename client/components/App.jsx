import React from 'react';
import PropTypes from 'prop-types';
import {saveTest} from '../redux/reducers/test';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {button} from 'react-bootstrap';
import Nav from "../components/layout/Nav";
import Counter from '../components/Counter';
import {incrementCounter , decrementCounter} from '../redux/reducers/counter';

const mapStateToProps = (state) => {
  return {
      test: state.test,
      counter: state.counter
  };
} ;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      saveTest,
      incrementCounter,
      decrementCounter
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


  render() {
    return (
     <div>
         <Nav />
         <Counter 
         value={this.props.counter}
         onIncerment = {() => this.increment()} 
         onDecrement = {() => this.decrement()} />
     </div>
);
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);
