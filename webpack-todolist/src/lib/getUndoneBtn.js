export default function createUndoButton(task, state, render) {
  const undoButton = document.createElement("button");
  undoButton.innerHTML = "not done";
  undoButton.onclick = () => {
    state.tasks = state.tasks.concat(state.doneTasks.filter(t => t === task));
    state.doneTasks = state.doneTasks.filter(t => t !== task);
    render();
  };
  return undoButton;
}
