import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = list => {
  return [...list, 0];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(addCounter(listBefore)).toEqual(listAfter);
};

try {
  testAddCounter();
  document.body.innerHTML = '<h1 style="color: green">Test passed</h1>';
} catch (e) {
  document.body.innerHTML = `<h1 style="color: red">Test failed</h1><p>${
    e.message
  }</p>`;
}
