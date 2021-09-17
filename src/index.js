import printMe from './print.js';
import './style.css';

console.log('22')
printMe()

 function component() {
   const element = document.createElement('div');
    element.innerHTML = "Hello webpack";
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());