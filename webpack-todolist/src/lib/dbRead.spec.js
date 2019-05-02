import dbRead from "./dbRead";
jest.mock("firebase");

describe("dbRead", () => {
  it("run", () => {
    const val = jest.fn();
    const promise = Promise.resolve({ val });
    const once = jest.fn(() => promise);
    const ref = jest.fn(() => ({
      once
    }));
    const database = jest.fn(() => ({
      ref
    }));
    require("firebase").database = database;
    const state = { uid: "testUid" };
    dbRead(state);
    expect(database).toHaveBeenCalled();
    expect(ref).toHaveBeenCalledWith(state.uid);
    expect(once).toHaveBeenCalledWith("value");
    expect(val).not.toHaveBeenCalled();
    promise.then(() => {
      expect(val).toHaveBeenCalled();
    });
  });
});
