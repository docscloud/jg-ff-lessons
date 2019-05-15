import expect from 'expect';
import deepFreeze from 'deep-freeze';

const removeCounter = (list, index) => {
  return list.slice(0, index).concat(list.slice(index + 1));
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

try {
  testRemoveCounter();
  document.body.innerHTML = '<h1 style="color: green">Test passed</h1>';
} catch (e) {
  document.body.innerHTML = `<h1 style="color: red">Test failed</h1><p>${
    e.message
  }</p>`;
}
