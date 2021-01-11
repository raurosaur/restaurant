import {Items} from './items.js';

const menu = function(container){
    container.innerHTML = '';
    Object.assign(container.style, {
        background: '#042D65',
        height: '200vh',
        flexDirection: 'column' 
    });

    for(let item of Items){
    let menuItem = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = item.name + '\n';

    menuItem.appendChild(h2);
    menuItem.innerText += item.toString();
    Object.assign(menuItem.style,{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        width: '80vw',
        height: '150px',
        background: '#D1DDEC',
        borderRadius: '30px',
        color: '#042D65',
    });

    h2.style.color = 'white';
    h2.style.textAlign = 'center';
    h2.style.fontSize = '400px !important';

    container.appendChild(menuItem);
    }
};

export {menu};