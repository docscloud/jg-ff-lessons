import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './input';
import Heading from './heading';
import List from './list';
import Login from './login';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    const { user } = this.props;
    return user ? (
      <>
        <Heading />
        <List />
        <Input />
        {user && <Listener />}
      </>
    ) : (
      <Login />
    );
  }
}

Todo.propTypes = {
  user: PropTypes.object
};

export default connect(state => ({
  user: state.user
}))(Todo);
