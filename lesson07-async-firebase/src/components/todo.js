import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from './input';
import Heading from './heading';
import List from './list';
import Login from './login';
import PropTypes from 'prop-types';

const Todo = ({ user }) => {
  const [display, setDisplay] = useState(true);

  return user ? (
    <>
      <Heading onClick={() => setDisplay(!display)} />
      {display ? (
        <List />
      ) : (
        <p
          style={{
            height: 30,
            margin: 20,
            fontSize: 16,
            backgroundColor: 'lightblue',
            textAlign: 'center'
          }}
        >
          OOOPS
        </p>
      )}

      <Input />
    </>
  ) : (
    <Login />
  );
};

Todo.propTypes = {
  user: PropTypes.object
};

export default connect(state => ({
  user: state.user
}))(Todo);
