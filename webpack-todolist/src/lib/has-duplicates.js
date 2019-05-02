import { displayError } from "./index.js";
// Duplicate check function

export default function hasDuplicates(tasks, text) {
  // const a = document.getElementById("input-box").value;
  for (let i = 0; i < tasks.length; ++i) {
    const value = tasks[i];
    if (value.text === text) {
      displayError("block");
      // console.log(state.error);
      return true;
    }
  }
  return false;
}
