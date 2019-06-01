import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask } from '../lib/tasks/actions';
import { onInputChange } from '../lib/inputValue/actions';

const Input = ({ inputValue, dispatch }) => (
  <>
    <input onChange={() => dispatch(onInputChange())} value={inputValue} />
    <button onClick={() => dispatch(addTask(inputValue))}>Add task</button>
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
  })
  // { onInputChange, addTask }
)(Input);
