module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Gess/Desktop/caicsignup/pages/signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const TextInput = ({
  type,
  name,
  label,
  onChange,
  placeholder,
  value,
  error
}) => {
  let wrapperClass = 'form-group';

  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return __jsx("div", {
    className: wrapperClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, label), __jsx("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("input", {
    type: type,
    name: name,
    className: "form-control input-lg",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), error && __jsx("div", {
    className: "alert alert-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, error)));
};

class UserInfo extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      verification_code: "",
      invitation_code: "",
      password: "",
      user_name: "",
      mobile: "",
      preMobile: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
  }

  componentDidMount() {
    let urlPath = window.location.search; //alert(urlPath);

    let components = urlPath.split("&");

    if (components.length !== 3) {
      alert("Information not complete");
    } else {
      let invitation = components[0].split("=")[1];
      let preMobile = components[1].split("=")[1];
      let mobile = components[2].split("=")[1];
      this.setState({
        invitation_code: invitation,
        mobile: mobile,
        preMobile: preMobile
      });
    }
  }

  onChange(e) {
    return this.setState({
      [e.target.name]: e.target.value
    });
  }

  formIsValid() {
    let isValid = true;

    if (this.state.password.length < 8) {
      alert("mobile number format is not right!");
      return false;
    }

    if (this.state.user_name.trim().length === 0) {
      alert("mobile number format is not right!");
      return false;
    }

    if (this.state.invitation_code.trim().length === 0) {
      alert("mobile number format is not right!");
      return false;
    }

    if (this.state.verification_code.trim().length === 0) {
      alert("mobile number format is not right!");
      return false;
    }

    return isValid;
  }

  submitForm(e) {
    e.preventDefault();

    if (this.formIsValid()) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://cicoins.io:8999/api/app/user/register", {
        "preMobile": this.state.preMobile,
        "mobile": this.state.mobile,
        "userName": this.state.user_name,
        "password": this.state.password,
        "code": this.state.verification_code,
        "inviteCode": this.state.invitation_code
      }).then(res => {
        let data = res.data;

        if (data.code === 0) {
          window.location = "/finish";
        } else {
          alert("Register failed");
        }
      });
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("div", {
      className: "Register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Register"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Production Company"), __jsx("form", {
      onSubmit: this.submitForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx(TextInput, {
      type: "text",
      label: "Verification Code",
      name: "verification_code",
      value: this.state.verification_code,
      placeholder: "Mobile verification code",
      onChange: this.onChange,
      errors: null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), __jsx(TextInput, {
      type: "text",
      label: "User Name",
      name: "user_name",
      value: this.state.user_name,
      placeholder: "User name",
      onChange: this.onChange,
      errors: null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }), __jsx(TextInput, {
      type: "password",
      label: "Password",
      name: "password",
      value: this.state.password,
      placeholder: "Password should be at least 8 characters",
      onChange: this.onChange,
      errors: null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), __jsx(TextInput, {
      type: "text",
      label: "Invitation Code",
      name: "invitation_code",
      value: this.state.invitation_code,
      placeholder: "invitation code",
      onChange: this.onChange,
      errors: null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), __jsx("input", {
      type: "submit",
      value: "Register",
      className: "btn btn-primary btn-lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }))));
  }

}

;
class Signup extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "CAIC"), __jsx("link", {
      href: "https://caicsignup.s3-ap-northeast-1.amazonaws.com/main.css",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }), __jsx("link", {
      href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    })), __jsx(UserInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }));
  }

}
;

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Gess/Desktop/caicsignup/pages/signup.js */"./pages/signup.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map