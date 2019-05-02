import { writeTasks } from "./index.js";

export default function clearList(state, render) {
  const clearList = document.getElementById("clear");
  clearList.innerHTML = "Clear done list";
  clearList.onclick = () => {
    state.doneTasks = [];
    writeTasks(state).then(render());
  };
}
