export default function createDeleteButton(task, state, render) {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";

  deleteButton.onclick = () => {
    state.tasks = state.tasks.filter(t => t !== task);
    render();
  };
  return deleteButton;
}
