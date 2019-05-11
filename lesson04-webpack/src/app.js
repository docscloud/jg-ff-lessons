import 'css/app.css';
import Logo from '../img/jg_280_rgb.svg';
import hw from 'utils/hw';

hw();

const logo = document.getElementById('logo');
const img = new Image();
img.src = `build/${Logo}`;
img.width = 200;

logo.appendChild(img);

console.log(Logo);
