export default function logOut(render, state) {
  const lg = document.getElementById("logOut");
  lg.innerHTML = "Log Out Firebase";
  lg.onclick = () => {
    state.login = false;
    render();
  };
}
