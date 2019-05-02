import { createDeleteButton, createDoneButton } from "./index.js";
export default function renderTasks(state, render) {
  const renderTask = task => {
    const li = document.createElement("li");
    li.innerHTML = task.text;
    li.appendChild(createDeleteButton(task, state, render));
    li.appendChild(createDoneButton(task, state, render));
    const ul = document.getElementById("list1");
    ul.appendChild(li);
  };
  const { tasks } = state;
  const ul = document.getElementById("list1");
  ul.innerHTML = "";
  tasks.forEach(renderTask);
}
