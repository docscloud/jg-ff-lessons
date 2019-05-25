import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onInputChange, addTask } from '../actions';

const Input = ({ onInputChange, addTask, inputValue }) => (
  <>
    <input onChange={onInputChange} value={inputValue} />
    <button onClick={addTask}>Add task</button>
  </>
);

Input.propTypes = {
  onInputChange: PropTypes.func,
  addTask: PropTypes.func,
  inputValue: PropTypes.string.isRequired
};

export default connect(
  state => ({
    inputValue: state.inputValue
  }),
  { onInputChange, addTask }
)(Input);
