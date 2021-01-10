import { column1, column2 } from './text.js';

const home = function(container){
    container.innerHTML = '';
    container.backgroundColor = 'none';
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