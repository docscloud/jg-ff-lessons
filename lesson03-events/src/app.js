function render() {
  const app = document.getElementById('app');
  const input = document.createElement('input');
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  input.oninput = function(e) {
    div.innerText = e.currentTarget.value;
  };
  app.appendChild(input);
  app.appendChild(div);
  app.appendChild(ul);
}

render();
