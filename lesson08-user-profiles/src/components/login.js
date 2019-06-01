import React, { useState } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import dbRef from '../dbRef';

const Login = ({ dispatch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onClick = () =>
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(firebaseUser => {
        const { uid, email } = (firebaseUser || {}).user;
        return { uid, email };
      })
      .then(user => {
        dbRef.update({ user }).then(() => {
          dispatch({ type: 'AUTH_DONE', user });
        });
      });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <input
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
