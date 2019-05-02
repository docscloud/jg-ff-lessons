import firebase from "firebase";
export default function writeTasks(state) {
  const { doneTasks, tasks } = state;

  console.log(state.tasks);

  return firebase
    .database()
    .ref(state.uid)
    .update({ donetasks: doneTasks, todo: tasks });
}
