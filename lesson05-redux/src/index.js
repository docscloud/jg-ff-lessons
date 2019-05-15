import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = todo => {
  return {
    id: todo.id,
    text: todo.text,
    complete: !todo.complete
  };
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn redux',
    complete: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn redux',
    complete: true
  };

  deepFreeze(todoBefore);

  expect(toggleTodo(todoBefore, 1)).toEqual(todoAfter);
};

try {
  testToggleTodo();
  document.body.innerHTML = '<h1 style="color: green">Test passed</h1>';
} catch (e) {
  document.body.innerHTML = `<h1 style="color: red">Test failed</h1><p>${
    e.message
  }</p>`;
}
