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

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   submitForm: () => (/* binding */ submitForm)\n/* harmony export */ });\n/* harmony import */ var _utils_sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/sum */ \"./src/app/utils/sum.js\");\n\r\n\r\nconst email = document.getElementById(\"email\").value;\r\nconst password = document.getElementById(\"password\").value;\r\n\r\nfunction submitForm(event) {\r\n  event.preventDefault(); // Prevent the form from submitting the default way\r\n\r\n  if (validateEmail(email) && validatePassword(password)) {\r\n    alert(\"Sign in successful!\", (0,_utils_sum__WEBPACK_IMPORTED_MODULE_0__.sum)(4, 5));\r\n    // You can add more actions here, like sending the data to a server\r\n  }\r\n}\r\n\r\nfunction validateEmail(email) {\r\n  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n  if (!re.test(email)) {\r\n    alert(\"Please enter a valid email address.\");\r\n    return false;\r\n  }\r\n  return true;\r\n}\r\n\r\nfunction validatePassword(password) {\r\n  if (password.length < 6) {\r\n    alert(\"Password must be at least 6 characters long.\");\r\n    return false;\r\n  }\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack://webpack-learning/./src/app/app.js?");

/***/ }),

/***/ "./src/app/utils/sum.js":
/*!******************************!*\
  !*** ./src/app/utils/sum.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sum: () => (/* binding */ sum)\n/* harmony export */ });\nfunction sum(a, b) {\r\n  return a + b;\r\n}\r\n\n\n//# sourceURL=webpack://webpack-learning/./src/app/utils/sum.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n\r\n\r\nconst formElement = document.getElementById(\"signin-form\");\r\n\r\nformElement.addEventListener(\"submit\", _app_app__WEBPACK_IMPORTED_MODULE_0__.submitForm);\r\n\n\n//# sourceURL=webpack://webpack-learning/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;