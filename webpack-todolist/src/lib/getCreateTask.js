import { hasDuplicates, displayError, writeTasks } from "./index.js";

export default function getCreateTask(render, state) {
  return function createTask() {
    const { tasks } = state;
    const text = document.getElementById("input-box").value;
    const task = { text: text };

    state.error = hasDuplicates(tasks, text);

    if (text === "") {
      state.error = true;
      displayError("block");
    }
    if (state.error === false) {
      tasks.push(task);
    }
    writeTasks(state).then(render());
  };
}
