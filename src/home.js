import { column1, column2 } from './text.js';

const home = function(container){
    container.innerHTML = '';
    container.style.background = "linear-gradient(0deg, rgba(0,0,0,0.2),  rgba(0,0,0,0.2)), url('https://restaurantengine.com/wp-content/uploads/2015/05/startup-restaurants-typically-overspend.jpg')";
    container.style.backgroundSize = '100vw 150vh';
    container.style.height = '100vh';
    container.style.flexDirection = 'row';

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