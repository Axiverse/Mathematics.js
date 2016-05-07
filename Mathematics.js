/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Mathematics = {
		Vector2: __webpack_require__(1),
		Vector3: __webpack_require__(2)
	};

	module.exports = Mathematics;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vector2 = function () {
		function Vector2(x, y, p) {
			_classCallCheck(this, Vector2);

			if (!p) {
				this.x = x || 0;
				this.y = y || 0;
			}
		}

		_createClass(Vector2, [{
			key: "set",
			value: function set(x, y) {

				this.x = x;
				this.y = y;

				return this;
			}
		}, {
			key: "copy",
			value: function copy(v) {

				this.x = v.x;
				this.y = v.y;

				return this;
			}
		}, {
			key: "clone",
			value: function clone() {

				return new THREE.Vector2(this.x, this.y);
			}
		}, {
			key: "add",
			value: function add(v1, v2) {

				this.x = v1.x + v2.x;
				this.y = v1.y + v2.y;

				return this;
			}
		}, {
			key: "addSelf",
			value: function addSelf(v) {

				this.x += v.x;
				this.y += v.y;

				return this;
			}
		}, {
			key: "sub",
			value: function sub(v1, v2) {

				this.x = v1.x - v2.x;
				this.y = v1.y - v2.y;

				return this;
			}
		}, {
			key: "subSelf",
			value: function subSelf(v) {

				this.x -= v.x;
				this.y -= v.y;

				return this;
			}
		}, {
			key: "multiplyScalar",
			value: function multiplyScalar(s) {

				this.x *= s;
				this.y *= s;

				return this;
			}
		}, {
			key: "divideScalar",
			value: function divideScalar(s) {

				if (s) {

					this.x /= s;
					this.y /= s;
				} else {

					this.set(0, 0);
				}

				return this;
			}
		}, {
			key: "negate",
			value: function negate() {

				return this.multiplyScalar(-1);
			}
		}, {
			key: "dot",
			value: function dot(v) {

				return this.x * v.x + this.y * v.y;
			}
		}, {
			key: "lengthSq",
			value: function lengthSq() {

				return this.x * this.x + this.y * this.y;
			}
		}, {
			key: "length",
			value: function length() {

				return Math.sqrt(this.lengthSq());
			}
		}, {
			key: "normalize",
			value: function normalize() {

				return this.divideScalar(this.length());
			}
		}, {
			key: "distanceTo",
			value: function distanceTo(v) {

				return Math.sqrt(this.distanceToSquared(v));
			}
		}, {
			key: "distanceToSquared",
			value: function distanceToSquared(v) {

				var dx = this.x - v.x,
				    dy = this.y - v.y;
				return dx * dx + dy * dy;
			}
		}, {
			key: "setLength",
			value: function setLength(l) {

				return this.normalize().multiplyScalar(l);
			}
		}, {
			key: "equals",
			value: function equals(v) {

				return v.x === this.x && v.y === this.y;
			}
		}]);

		return Vector2;
	}();

	;

	module.exports = Vector2;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vector3 = function () {
		function Vector3(x, y, z, p) {
			_classCallCheck(this, Vector3);

			if (!p) {
				this.x = x || 0;
				this.y = y || 0;
				this.z = z || 0;
			}
		}

		// setters and getters


		_createClass(Vector3, [{
			key: "set",
			value: function set(x, y, z) {
				this.x = x;
				this.y = y;
				this.z = z;
				return this;
			}
		}, {
			key: "setX",
			value: function setX(x) {
				this.x = x;
				return this;
			}
		}, {
			key: "setY",
			value: function setY(y) {
				this.y = y;
				return this;
			}
		}, {
			key: "setZ",
			value: function setZ(z) {
				this.z = z;
				return this;
			}
		}, {
			key: "copy",
			value: function copy(v) {
				this.x = v.x;
				this.y = v.y;
				this.z = v.z;
				return this;
			}
		}, {
			key: "clone",
			value: function clone() {
				return new Vector3(this.x, this.y, this.z);
			}
		}, {
			key: "add",
			value: function add(v1, v2) {
				this.x = v1.x + v2.x;
				this.y = v1.y + v2.y;
				this.z = v1.z + v2.z;
				return this;
			}
		}, {
			key: "addSelf",
			value: function addSelf(v) {
				this.x += v.x;
				this.y += v.y;
				this.z += v.z;
				return this;
			}
		}, {
			key: "addScalar",
			value: function addScalar(s) {
				this.x += s;
				this.y += s;
				this.z += s;
				return this;
			}
		}, {
			key: "sub",
			value: function sub(v1, v2) {
				this.x = v1.x - v2.x;
				this.y = v1.y - v2.y;
				this.z = v1.z - v2.z;
				return this;
			}
		}, {
			key: "subComponent",
			value: function subComponent(v) {
				this.x -= v.x;
				this.y -= v.y;
				this.z -= v.z;
				return this;
			}
		}, {
			key: "multiply",
			value: function multiply(a, b) {
				this.x = a.x * b.x;
				this.y = a.y * b.y;
				this.z = a.z * b.z;
				return this;
			}
		}, {
			key: "multiplySelf",
			value: function multiplySelf(v) {
				this.x *= v.x;
				this.y *= v.y;
				this.z *= v.z;
				return this;
			}
		}, {
			key: "multiplyScalar",
			value: function multiplyScalar(s) {
				this.x *= s;
				this.y *= s;
				this.z *= s;

				return this;
			}
		}, {
			key: "divideSelf",
			value: function divideSelf(v) {
				this.x /= v.x;
				this.y /= v.y;
				this.z /= v.z;
				return this;
			}
		}, {
			key: "divideScalar",
			value: function divideScalar(s) {
				this.x /= s;
				this.y /= s;
				this.z /= s;
				return this;
			}
		}, {
			key: "negate",
			value: function negate() {
				return this.multiplyScalar(-1);
			}
		}, {
			key: "dot",
			value: function dot(v) {
				return this.x * v.x + this.y * v.y + this.z * v.z;
			}
		}, {
			key: "lengthSq",
			value: function lengthSq() {
				return this.x * this.x + this.y * this.y + this.z * this.z;
			}
		}, {
			key: "length",
			value: function length() {
				return Math.sqrt(this.lengthSq());
			}
		}, {
			key: "lengthManhattan",
			value: function lengthManhattan() {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
			}
		}, {
			key: "normalize",
			value: function normalize() {
				return this.divideScalar(this.length());
			}
		}, {
			key: "setLength",
			value: function setLength(l) {
				return this.normalize().multiplyScalar(l);
			}
		}, {
			key: "cross",
			value: function cross(a, b) {
				this.x = a.y * b.z - a.z * b.y;
				this.y = a.z * b.x - a.x * b.z;
				this.z = a.x * b.y - a.y * b.x;
				return this;
			}
		}, {
			key: "crossSelf",
			value: function crossSelf(v) {
				var x = this.x,
				    y = this.y,
				    z = this.z;

				this.x = y * v.z - z * v.y;
				this.y = z * v.x - x * v.z;
				this.z = x * v.y - y * v.x;

				return this;
			}
		}, {
			key: "distanceTo",
			value: function distanceTo(v) {
				return Math.sqrt(this.distanceToSquared(v));
			}
		}, {
			key: "distanceToSquared",
			value: function distanceToSquared(v) {
				return new Vector3().sub(this, v).lengthSq();
			}
		}, {
			key: "isZero",
			value: function isZero() {
				return this.lengthSq() < 0.0001 /* almostZero */;
			}
		}, {
			key: "max",
			value: function max(a) {
				for (var i = 0; i < a.length; i++) {
					this.x = Math.max(a[i].x, this.x);
					this.y = Math.max(a[i].y, this.y);
					this.z = Math.max(a[i].z, this.z);
				}
			}
		}, {
			key: "min",
			value: function min(a) {
				for (var i = 0; i < a.length; i++) {
					this.x = Math.min(a[i].x, this.x);
					this.y = Math.min(a[i].y, this.y);
					this.z = Math.min(a[i].z, this.z);
				}
			}
		}, {
			key: "midpoint",
			value: function midpoint(l, r) {
				this.x = (l.x + r.x) / 2;
				this.y = (l.y + r.y) / 2;
				this.z = (l.z + r.z) / 2;
				return this;
			}
		}]);

		return Vector3;
	}();

	Vector3.Origin = Object.freeze(new Vector3(0, 0, 0));
	Vector3.UnitX = Object.freeze(new Vector3(1, 0, 0));
	Vector3.UnitY = Object.freeze(new Vector3(0, 1, 0));
	Vector3.UnitZ = Object.freeze(new Vector3(0, 0, 1));

	module.exports = Vector3;

/***/ }
/******/ ]);