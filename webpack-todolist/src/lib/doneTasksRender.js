import { createUndoButton } from "./index.js";
export default function renderDoneTasks(state, render) {
  const renderDoneTask = doneTask => {
    const li = document.createElement("li");
    li.innerHTML = doneTask.text;
    li.appendChild(createUndoButton(doneTask, state, render));
    // li.appendChild();
    const ul = document.getElementById("list2");
    ul.appendChild(li);
  };
  const { doneTasks } = state;
  const ul = document.getElementById("list2");
  ul.innerHTML = "";
  doneTasks.forEach(renderDoneTask);
}
