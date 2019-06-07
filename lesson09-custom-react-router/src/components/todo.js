import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Heading from './heading';
import Login from './login';
import PropTypes from 'prop-types';
import Route from './router/route';
import Body from './body';

class Todo extends Component {
  render() {
    const { user } = this.props;

    return user ? (
      <Row>
        <Col xs={12} sm={{ size: 8, offset: 2 }} style={{ padding: 20 }}>
          <Heading />
        </Col>
        <Col xs={12} sm={{ size: 8, offset: 2 }} style={{ padding: 20 }}>
          <Route path="/" component={Body} />
          <Route path="/about" component={() => <h1>About page</h1>} />
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
