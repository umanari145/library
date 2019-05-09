/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(exports, \"a\", function() { return PersonClass; });\n//exportで外から読み込めるようになる\nvar PersonClass = function PersonClass (id, name) {\n  this.id = id\n  this.name = name\n};\nPersonClass.prototype.printName = function printName (){\n  console.log(((this.name) + \" クラスの中に入れている名前です。\"))\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvcGVyc29uQ2xhc3MuanM/YWM1YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2V4cG9ydOOBp+WkluOBi+OCieiqreOBv+i+vOOCgeOCi+OCiOOBhuOBq+OBquOCi1xuZXhwb3J0IGNsYXNzIFBlcnNvbkNsYXNze1xuICBjb25zdHJ1Y3RvciAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cbiAgcHJpbnROYW1lKCl7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSDjgq/jg6njgrnjga7kuK3jgavlhaXjgozjgabjgYTjgovlkI3liY3jgafjgZnjgIJgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3BlcnNvbkNsYXNzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_personClass_js__ = __webpack_require__(0);\n\nvar person = new __WEBPACK_IMPORTED_MODULE_0__lib_personClass_js__[\"a\" /* PersonClass */](6,'落合');\nperson.printName()\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9lczZsb2FkLmpzP2Y4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc29uQ2xhc3MgfSBmcm9tICcuL2xpYi9wZXJzb25DbGFzcy5qcydcbmNvbnN0IHBlcnNvbiA9IG5ldyBQZXJzb25DbGFzcyg2LCfokL3lkIgnKTtcbnBlcnNvbi5wcmludE5hbWUoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVzNmxvYWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);