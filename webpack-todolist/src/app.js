const state = { tasks: [], error: false, doneTasks: [], login: false, uid: "" };
import firebase from "firebase";
import firebaseui from "firebaseui";

import {
  displayError,
  reading,
  renderError,
  renderButton,
  renderTasks,
  renderDoneTasks,
  config,
  clearList,
  logOut
} from "./lib";
import "./lib/addBtn.css";

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult) {
      state.uid = authResult.user.uid;
      console.log(state.uid);
      state.login = true;
      logOut(render, state);
      reading(state).then(data => {
        console.log(data);
        state.tasks = (data || {}).todo || [];
        state.doneTasks = (data || {}).donetasks || [];
        render();
      });
      return false;
    },
    uiShown: function() {
      document.getElementById("loader").style.display = "none";
    }
  },
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
};
firebase.initializeApp(config);
const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui-auth-container", uiConfig);

function render() {
  if (state.login === true) {
    document.getElementById("app").style.display = "block";
    document.getElementById("logOut").style.display = "block";
    console.log("login:" + state.login);
    renderButton(state, render);
    renderTasks(state, render);
    renderDoneTasks(state, render);
    renderError(state);
    clearList(state, render);
  } else {
    console.log("login:" + state.login);
    ui.start("#firebaseui-auth-container", uiConfig);
  }
}

window.onload = () => {
  document.getElementById("input-box").onkeydown = () => displayError("none");
};
