import React from 'react';
import { connect } from 'react-redux';

const Input = ({ onInputChange, addTask, inputValue }) => {
  console.log('INPUT VALUE', inputValue);
  return (
    <>
      <input onChange={onInputChange} />
      <button onClick={addTask}>Add task</button>
    </>
  );
};

export default connect(state => ({
  inputValue: state.inputValue
}))(Input);
