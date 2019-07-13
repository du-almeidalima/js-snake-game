/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\n // Canvas Settings\n\nvar canvas = document.querySelector('canvas');\nvar c = canvas.getContext(\"2d\");\ncanvas.width = 600;\ncanvas.height = 600;\nvar canvasSettings = {\n  canvas: canvas,\n  c: c // Global Variables\n\n};\nvar scl = 15;\nvar fps = 10;\nvar foodUrl = ['./src/assets/pill1.png', './src/assets/pill2.png', './src/assets/pill3.png', './src/assets/pill4.png'];\nvar foodImg = new Image();\nfoodImg.src = foodUrl[Math.floor(Math.random() * 4 + 1) - 1];\nvar food = {\n  x: Math.floor(Math.random() * 40 + 1) * scl,\n  y: Math.floor(Math.random() * 40 + 1) * scl\n};\nvar score = 0; // Snake\n\nvar snk = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"](300, 300, canvasSettings, scl); // Event Listeners\n\ndocument.addEventListener('keydown', function (e) {\n  return snk.move(e.key);\n}); // Screen\n\n(function animate() {\n  setTimeout(function () {\n    requestAnimationFrame(animate);\n    c.clearRect(0, 0, canvas.width, canvas.height);\n    snk.update();\n    snk.eat(food);\n    snk.display(); // Food Display\n\n    c.drawImage(foodImg, food.x, food.y, scl, scl);\n  }, 1000 / fps);\n})();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! exports provided: Snake, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Snake =\n/*#__PURE__*/\nfunction () {\n  function Snake(x, y, canvasSettings, scl) {\n    _classCallCheck(this, Snake);\n\n    this.dx = 0;\n    this.dy = 0;\n    this.c = canvasSettings.c;\n    this.canvas = canvasSettings.canvas;\n    this.scl = scl;\n    this.body = [{\n      x: x,\n      y: y\n    }];\n  }\n\n  _createClass(Snake, [{\n    key: \"update\",\n    value: function update() {\n      var _this = this;\n\n      if (this.body[0].x >= this.canvas.width || this.body[0].x < 0 || this.body[0].y >= this.canvas.height || this.body[0].y < 0) {\n        this.dx = 0;\n        this.dy = 0;\n      } else {\n        var aux = {\n          x: undefined,\n          y: undefined\n        };\n        var past = {\n          x: undefined,\n          y: undefined\n        };\n        this.body.forEach(function (segment, index) {\n          if (index === 0) {\n            segment.x = _this.body[0].x;\n            segment.y = _this.body[0].y;\n            aux.x = _this.body[0].x;\n            aux.y = _this.body[0].y;\n          } else {\n            past.x = segment.x;\n            past.y = segment.y;\n            segment.x = aux.x;\n            segment.y = aux.y;\n            aux.x = past.x;\n            aux.y = past.y;\n          }\n        });\n        this.body[0].x = this.body[0].x + this.dx;\n        this.body[0].y = this.body[0].y + this.dy;\n      }\n    }\n  }, {\n    key: \"eat\",\n    value: function eat(food) {\n      if (this.body[0].x === food.x && this.body[0].y === food.y) {\n        this.body.push({\n          x: food.x,\n          y: food.y\n        });\n        food = {\n          x: Math.floor(Math.random() * 40 + 1) * this.scl,\n          y: Math.floor(Math.random() * 40 + 1) * this.scl\n        };\n      }\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      var _this2 = this;\n\n      this.body.forEach(function (t, index) {\n        _this2.c.beginPath();\n\n        index === 0 ? _this2.c.fillStyle = \"black\" : _this2.c.fillStyle = \"white\";\n\n        _this2.c.fillRect(t.x, t.y, _this2.scl, _this2.scl);\n\n        _this2.c.closePath();\n      });\n    }\n  }, {\n    key: \"move\",\n    value: function move(key) {\n      switch (key) {\n        case 'ArrowUp':\n          if (this.dy !== this.scl) {\n            this.dy = -1 * this.scl;\n            this.dx = 0;\n          }\n\n          break;\n\n        case 'ArrowLeft':\n          if (this.dx !== this.scl) {\n            this.dx = -1 * this.scl;\n            this.dy = 0;\n          }\n\n          break;\n\n        case 'ArrowDown':\n          if (this.dy !== -this.scl) {\n            this.dy = 1 * this.scl;\n            this.dx = 0;\n          }\n\n          break;\n\n        case 'ArrowRight':\n          if (this.dx !== -this.scl) {\n            this.dx = 1 * this.scl;\n            this.dy = 0;\n          }\n\n          break;\n      }\n\n      ;\n    }\n  }]);\n\n  return Snake;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake);\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ });