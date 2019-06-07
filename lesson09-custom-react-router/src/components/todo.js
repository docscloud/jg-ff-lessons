import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Input from './input';
import Heading from './heading';
import List from './list';
import Login from './login';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    const { user } = this.props;
    return user ? (
      <Row>
        <Col xs={12} sm={{ size: 8, offset: 2 }} style={{ padding: 20 }}>
          <Heading />
        </Col>
        <Col xs={12} sm={{ size: 8, offset: 2 }} style={{ padding: 20 }}>
          <List />
        </Col>
        <Col xs={12} sm={{ size: 8, offset: 2 }} style={{ padding: 20 }}>
          <Input />
        </Col>
      </Row>
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
