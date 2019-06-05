import React, { useState } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Cookie from 'js-cookie';
import {
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col
} from 'reactstrap';
import dbRef from '../dbRef';
import { authUser, initialiseListeners } from '../lib/user/actions';

const Login = ({ dispatch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onClick = () => dispatch(authUser({ username, password }));

  return (
    <Row>
      <Col xs={{ size: 6, offset: 3 }} sm={{ size: 4, offset: 4 }}>
        <Form>
          <FormGroup row>
            <Input
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="username"
            />
          </FormGroup>
          <FormGroup row>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              placeholder="password"
            />
          </FormGroup>
          <FormGroup row>
            <Button {...{ onClick }} color="success">
              Login
            </Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default connect()(Login);
