import React from 'react';
import PropTypes from 'prop-types';
import {saveTest} from '../redux/reducers/test';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {button} from 'react-bootstrap';
import Nav from "../components/layout/Nav";

const mapStateToProps = (state) => {
  return {
      test: state.test
  };
} ;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      saveTest
  },dispatch);
};
const a = {data: 1};

class App extends React.Component {


componentWillMount() {
  console.log('dziala')
    this.props.saveTest(a); 
}

  render() {
    return (
     <div>
         <Nav />
     </div>
);
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);
