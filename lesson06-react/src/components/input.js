import React from 'react';

const Input = ({ onInputChange, addTask }) => (
  <>
    <input onChange={onInputChange} />
    <button onClick={addTask}>Add task</button>
  </>
);

export default Input;
