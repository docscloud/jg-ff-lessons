import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Input as RSInput, Row, Col } from 'reactstrap';
import { addTask } from '../lib/tasks/actions';
import { onInputChange } from '../lib/inputValue/actions';

const Input = ({ inputValue, dispatch }) => (
  <Row>
    <Col>
      <RSInput onChange={e => dispatch(onInputChange(e))} value={inputValue} />
    </Col>
    <Col>
      <Button onClick={() => dispatch(addTask(inputValue))}>Add task</Button>
    </Col>
  </Row>
);

Input.propTypes = {
  dispatch: PropTypes.func,
  inputValue: PropTypes.string.isRequired
};

export default connect(state => ({
  inputValue: state.inputValue
}))(Input);
