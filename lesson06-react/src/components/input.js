import React from 'react';
import { connect } from 'react-redux';

const Input = ({ addTask, inputValue, dispatch }) => {
  const onInputChange = e => {
    dispatch({ type: 'ON_INPUT_CHANGE', inputValue: e.currentTarget.value });
  };

  return (
    <>
      <input onChange={onInputChange} value={inputValue} />
      <button onClick={addTask}>Add task</button>
    </>
  );
};

export default connect(state => ({
  inputValue: state.inputValue
}))(Input);
