import { getCreateTask } from "./index.js";

export default function renderButton(state, render) {
  const createTask = getCreateTask(render, state);
  const addButton = document.getElementById("add-task");
  addButton.onclick = createTask;
}
