webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
	function Form(data) {
		_classCallCheck(this, Form);

		this.originalData = data;

		for (var field in data) {
			this[field] = data[field];
		}
	}

	_createClass(Form, [{
		key: "reset",
		value: function reset() {
			for (var field in this) {
				this[field] = null;
			}
		}
	}, {
		key: "data",
		value: function data() {
			var data = {};
			for (var property in this.originalData) {
				data[property] = this[property];
			}

			return data;
		}
	}, {
		key: "submit",
		value: function submit(path) {}
	}, {
		key: "onSuccess",
		value: function onSuccess() {}
	}, {
		key: "onFail",
		value: function onFail() {}
	}]);

	return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Form__ = __webpack_require__(1);



window.Form = __WEBPACK_IMPORTED_MODULE_1__core_Form__["a" /* default */];

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	el: '#app',
	data: {}
});

/***/ })
],[2]);