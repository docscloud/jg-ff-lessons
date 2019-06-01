import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../lib/user/actions';

const Heading = ({ onClick, logOut, dispatch }) => (
  <div>
    <h1 onClick={onClick}>Todo List</h1>
    <button onClick={logOut}>Logout</button>
  </div>
);

export default connect(
  null,
  { logOut }
)(Heading);
