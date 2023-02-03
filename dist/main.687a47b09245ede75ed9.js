/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || []).push([["main"],{

/***/ "./src/132.jpg":
/*!*********************!*\
  !*** ./src/132.jpg ***!
  \*********************/
/***/ ((module) => {

eval("var a = 12123; module.exports = 'from kun loader' + a\n\n//# sourceURL=webpack://webpack_test/./src/132.jpg?");

/***/ }),

/***/ "./loaders/kun-loader/kun.placeholder.js?asdasd":
/*!******************************************************!*\
  !*** ./loaders/kun-loader/kun.placeholder.js?asdasd ***!
  \******************************************************/
/***/ ((module) => {

eval("var a = 12123; module.exports = 'from kun loader' + a\n\n//# sourceURL=webpack://webpack_test/./loaders/kun-loader/kun.placeholder.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _kun_asdasd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kun?asdasd */ \"./loaders/kun-loader/kun.placeholder.js?asdasd\");\n/* harmony import */ var _kun_asdasd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kun_asdasd__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _132_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./132.jpg */ \"./src/132.jpg\");\n/* harmony import */ var _132_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_132_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print */ \"./src/print.js\");\n\n\nconsole.log((_kun_asdasd__WEBPACK_IMPORTED_MODULE_0___default()))\n\n\n;\n\nconsole.log((_132_jpg__WEBPACK_IMPORTED_MODULE_1___default()))\n\n// import ac from './app.vue'\n// console.log(ac)\n\n;\nconsole.log(dayjs__WEBPACK_IMPORTED_MODULE_2___default()().unix())\n\n;\n\nconsole.log(lodash__WEBPACK_IMPORTED_MODULE_3___default().join(['1', '2']))\n\n;\n\n(0,_print__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('1')\n\n//# sourceURL=webpack://webpack_test/./src/index.js?");

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ print)\n/* harmony export */ });\nfunction print(text) {\n  console.log(text);\n};\n\n//# sourceURL=webpack://webpack_test/./src/print.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);