import { column1, column2 } from './text.js';

const home = function(container){
    container.innerHTML = '';
    container.style.background = "linear-gradient(0deg, rgba(0,0,0,0.5),  rgba(0,0,0,0.5)), url('https://raw.githubusercontent.com/raurosaur/restaurant/main/dist/restaurant.jpg')";
    container.style.backgroundSize = '100vw 150vh';
    container.style.height = '100vh';

    const col1 = document.createElement('div'),
        col2 = document.createElement('div');

    col1.classList.add('about');
    col2.classList.add('about');

    col1.innerText = column1;
    col2.innerText = column2;

    container.appendChild(col1);
    container.appendChild(col2);
}

export {home};