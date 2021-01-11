/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => /* binding */ contact\n/* harmony export */ });\nconst contact = function (container) {\n    container.innerHTML = '';\n    container.style.background = '#011C41';\n    container.style.height = '65vh';\n\n    const contactInfo = document.createElement('div');\n\n    Object.assign(contactInfo.style, {\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        background: '#D1DDEC',\n        color: '#011C41',\n        height: '60vh',\n        width: '50vh',\n        borderRadius: '40px',\n        fontWeight: '900',\n        lineHeight: '40px'\n    });\n\n    contactInfo.innerHTML = `\n    Address: 32/A BCD Street, XYZ Alley, JK-07<br>\n    Contact: 223-001-345<br>\n    Email: abc@restaurant.com\n    `;\n\n    container.appendChild(contactInfo);\n};\n\n\n\n//# sourceURL=webpack://the_odin_project/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => /* binding */ home\n/* harmony export */ });\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ \"./src/text.js\");\n\n\nconst home = function(container){\n    container.innerHTML = '';\n    container.style.background = \"linear-gradient(0deg, rgba(0,0,0,0.2),  rgba(0,0,0,0.2)), url('https://restaurantengine.com/wp-content/uploads/2015/05/startup-restaurants-typically-overspend.jpg')\";\n    container.style.backgroundSize = '100vw 150vh';\n    container.style.height = '100vh';\n    container.style.flexDirection = 'row';\n\n    const col1 = document.createElement('div'),\n        col2 = document.createElement('div');\n\n    col1.classList.add('about');\n    col2.classList.add('about');\n\n    col1.innerText = _text_js__WEBPACK_IMPORTED_MODULE_0__.column1;\n    col2.innerText = _text_js__WEBPACK_IMPORTED_MODULE_0__.column2;\n\n    container.appendChild(col1);\n    container.appendChild(col2);\n}\n\n\n\n//# sourceURL=webpack://the_odin_project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n//Supporting docs\n\n\n\n\n//Container\nconst content = document.getElementById('content');\nconst container = document.createElement('div');\ncontainer.classList.add('container');\n\n//Header\nconst header = document.createElement('header'),\nh2 = document.createElement('h2');\nh2.innerText = 'Restaurant';\ncontent.appendChild(header);\nheader.appendChild(h2);\n\n//Nav Bar\nconst navBar = document.createElement('nav'),\nhomeBar = document.createElement('a'),\nmenuBar = document.createElement('a'),\ncontactBar = document.createElement('a');\n\nhomeBar.innerText = 'Home';\nmenuBar.innerText = 'Menu';\ncontactBar.innerText = 'Contact Us';\n\n//Events\nhomeBar.addEventListener('click', () => {(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)(container)});\nmenuBar.addEventListener('click', () => {(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)(container)});\ncontactBar.addEventListener('click', () => {(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)(container)});\n\nnavBar.appendChild(homeBar);\nnavBar.appendChild(menuBar);\nnavBar.appendChild(contactBar);\ncontent.appendChild(navBar);\n\ncontent.appendChild(container);\n\n//Text\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)(container);\n\n//Footer\nconst footer = document.createElement('footer');\nfooter.innerText = \"Created by @raurosaur\";\ncontent.appendChild(footer);\n\n//# sourceURL=webpack://the_odin_project/./src/index.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Items\": () => /* binding */ Items\n/* harmony export */ });\nclass Item{\n    constructor(name, desc, cost, vegan = false){\n        this.name = name;\n        this.desc = desc;\n        this.cost = cost;\n        this.vegan = vegan;\n    }\n    toString(){\n       return `\\n${this.desc}\n    --------------- $${this.cost}`; \n    }\n}\n\nconst Items = \n[new Item('Ploughman\\'s', 'Serves 2\\nA feast of English cheese, crusty bread, field green salad, roasted tomatoes, cornichon pickles, apple beet salad,\\nbranston pickle & scotch egg', 21.99),\nnew Item('Banger', 'Roasted English sausage, mustard aioli, roasted tomatoes, sauteed cabbage and onions on a crusted baguette' ,12.99),\nnew Item('Macaroni Cheese','',7.49),\nnew Item('Pumpkin Juice', '', 4.99, true),\nnew Item('Sticky Toffee Pudding', '', 7.49),\n];\n\n\n\n//# sourceURL=webpack://the_odin_project/./src/items.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => /* binding */ menu\n/* harmony export */ });\n/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.js */ \"./src/items.js\");\n\n\nconst menu = function(container){\n    container.innerHTML = '';\n    Object.assign(container.style, {\n        background: '#042D65',\n        height: '200vh',\n        flexDirection: 'column' \n    });\n\n    for(let item of _items_js__WEBPACK_IMPORTED_MODULE_0__.Items){\n    let menuItem = document.createElement('div');\n    let h2 = document.createElement('h2');\n    h2.textContent = item.name + '\\n';\n\n    menuItem.appendChild(h2);\n    menuItem.innerText += item.toString();\n    Object.assign(menuItem.style,{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        textAlign: 'justify',\n        width: '80vw',\n        height: '150px',\n        background: '#D1DDEC',\n        borderRadius: '30px',\n        color: '#042D65',\n    });\n\n    h2.style.color = 'white';\n    h2.style.textAlign = 'center';\n    h2.style.fontSize = '400px !important';\n\n    container.appendChild(menuItem);\n    }\n};\n\n\n\n//# sourceURL=webpack://the_odin_project/./src/menu.js?");

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"column1\": () => /* binding */ column1,\n/* harmony export */   \"column2\": () => /* binding */ column2\n/* harmony export */ });\nconst column1 = 'Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and'\n+'Marta was inside trying to round up the last of the pets.Dave went through his mental list of the most important papers and documents' + \n'that they couldn\\'t leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything' +\n'that was needed.He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.';\n\nconst column2 = 'You have arrived at this webpage in all likelihood because you are in need of some fake words. If that\\'s the case, you\\'re in exactly the right place.'\n+' We created the Random Fake Word Generator specifically so you can find a bunch of fake words(sometimes called pseudo words, made up words, or nonsense words).Creating' +  'these made - up words is simple.'\n+ 'All you need to do is choose the number of fake words you\\'d like to see and then hit the button. You\\'ll instantly seethe results.';\n\n\n\n//# sourceURL=webpack://the_odin_project/./src/text.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;