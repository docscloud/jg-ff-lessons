import clearDoneList from "./clearDoneList";
jest.mock("./index");

describe("test", () => {
  it("test", () => {
    const state = {};
    const promise = Promise.resolve(state);
    require("./index").writeTasks = jest.fn(() => promise);
    const render = jest.fn();
    const clearList = {};
    document.getElementById = jest.fn(() => clearList);
    clearDoneList(state, render);
    clearList.onclick();
    promise.then(() => {
      expect(state.doneTasks instanceof Array).toBeTruthy();
    });
    expect(clearList.innerHTML).toBe("Clear done list");
    expect(clearList.onclick instanceof Function).toBeTruthy();
    expect(render).toHaveBeenCalled();
  });
});
