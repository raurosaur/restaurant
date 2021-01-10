//Supporting docs
import {home} from './home.js';
import {menu} from './menu.js';
//Container
const content = document.getElementById('content');
const container = document.createElement('div');
container.classList.add('container');

//Header
const header = document.createElement('header'),
h2 = document.createElement('h2');
h2.innerText = 'Restaurant';
content.appendChild(header);
header.appendChild(h2);

//Nav Bar
const navBar = document.createElement('nav'),
homeBar = document.createElement('a'),
menuBar = document.createElement('a'),
contact = document.createElement('a');

homeBar.innerText = 'Home';
menuBar.innerText = 'Menu';
contact.innerText = 'Contact Us';

//Events
homeBar.addEventListener('click', () => {home(container)});
menuBar.addEventListener('click', () => {menu(container)});

navBar.appendChild(homeBar);
navBar.appendChild(menuBar);
navBar.appendChild(contact);
content.appendChild(navBar);

content.appendChild(container);

//Text
home(container);

//Footer
const footer = document.createElement('footer');
footer.innerText = "Created by @raurosaur";
content.appendChild(footer);