import { writeTasks } from "./index.js";
export default function createDoneButton(task, state, render) {
  const { doneTasks } = state;
  const moveButton = document.createElement("button");
  moveButton.innerHTML = "Done!";
  moveButton.onclick = () => {
    doneTasks.push(task);
    state.tasks = state.tasks.filter(t => t !== task);
    writeTasks(state).then(render());
  };
  return moveButton;
}
