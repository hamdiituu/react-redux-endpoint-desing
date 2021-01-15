import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {getAllTodo} from '../store/todo/actions';
class Home extends React.Component {
  componentDidMount(){
    this.props.getAllTodo();
  }
  render() {
    return <h1>Home View</h1>;
  }
}

const storeState = (state) => {
  return {
    allTodo: state.TodoReducer.allTodo,
  };
};

const storeAction = (dispatch) => {
  return bindActionCreators({
    getAllTodo
  }, dispatch);
};

export default connect(storeState,storeAction)(Home);
