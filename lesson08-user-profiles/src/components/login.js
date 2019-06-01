import React, { useState } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Cookie from 'js-cookie';
import dbRef from '../dbRef';
import { authUser, initialiseListeners } from '../lib/user/actions';

const Login = ({ dispatch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onClick = () => dispatch(authUser({ username, password }));

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
        placeholder="password"
      />
      <br />
      <button {...{ onClick }}>Login</button>
    </div>
  );
};

export default connect()(Login);
