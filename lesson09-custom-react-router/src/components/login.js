import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Input,
  Form,
  FormGroup,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';
import { authUser } from '../lib/user/actions';

const Login = ({ dispatch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onClick = () => dispatch(authUser({ username, password }));

  return (
    <Row style={{ marginTop: 50 }}>
      <Col xs={{ size: 6, offset: 3 }} sm={{ size: 4, offset: 4 }}>
        <Card>
          <CardBody>
            <Form style={{ padding: 20 }}>
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
              <FormGroup
                row
                style={{ dispay: 'flex', justifyContent: 'flex-end' }}
              >
                <Button {...{ onClick }} color="success">
                  Login
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default connect()(Login);
