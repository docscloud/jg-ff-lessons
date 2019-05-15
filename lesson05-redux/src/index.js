import expect from 'expect';

const removeCounter = (list, index) => {
  list.splice(index, 1);

  return list;
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

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
