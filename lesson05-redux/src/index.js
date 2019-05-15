import expect from 'expect';

const toggleTodo = todo => {
  todo.complete = !todo.complete;
  return todo;
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    test: 'Learn redux',
    complete: false
  };
  const todoAfter = {
    id: 0,
    test: 'Learn redux',
    complete: true
  };

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
