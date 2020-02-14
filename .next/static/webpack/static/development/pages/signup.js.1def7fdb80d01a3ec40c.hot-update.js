webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/Gess/Desktop/caicsignup/pages/signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var TextInput = function TextInput(_ref) {
  var type = _ref.type,
      name = _ref.name,
      label = _ref.label,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      error = _ref.error;
  var wrapperClass = 'form-group';

  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return __jsx("div", {
    className: wrapperClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("label", {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, label), __jsx("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
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
    __self: this
  }), error && __jsx("div", {
    className: "alert alert-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, error)));
};

var UserInfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(UserInfo, _React$Component);

  function UserInfo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserInfo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(UserInfo).call(this, props));
    _this.state = {
      verification_code: "",
      invitation_code: "",
      password: false,
      user_name: "",
      mobile: "",
      preMobile: ""
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.formIsValid = _this.formIsValid.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UserInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var urlPath = window.location.search; //alert(urlPath);

      var components = urlPath.split("&");

      if (components.length !== 3) {
        alert("Information not complete");
      } else {
        var invitation = components[0].split("=")[1];
        var preMobile = components[1].split("=")[1];
        var mobile = components[2].split("=")[1];
        this.setState({
          invitation_code: invitation,
          mobile: mobile,
          preMobile: preMobile
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      return this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "formIsValid",
    value: function formIsValid() {
      var isValid = true;

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
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      e.preventDefault();

      if (this.formIsValid()) {
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("http://cicoins.io:8999/api/app/verify/signUpCode", {
          "preMobile": this.state.preMobile,
          "mobile": this.state.mobile,
          "userName": this.state.user_name,
          "password": this.state.password,
          "code": this.props.verification_code,
          "inviteCode": this.state.invitation_code
        }).then(function (res) {});
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("div", {
        className: "Register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Register"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Production Company"), __jsx("form", {
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
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
          lineNumber: 129
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
          lineNumber: 139
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
          lineNumber: 149
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
          lineNumber: 158
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: "Register",
        className: "btn btn-primary btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }))));
    }
  }]);

  return UserInfo;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;

var Signup =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Signup, _React$Component2);

  function Signup(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Signup);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup).call(this, props));
    _this2.state = {};
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Signup, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "CAIC"), __jsx("link", {
        href: "https://caicsignup.s3-ap-northeast-1.amazonaws.com/main.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), __jsx("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      })), __jsx(UserInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);


;

/***/ })

})
//# sourceMappingURL=signup.js.1def7fdb80d01a3ec40c.hot-update.js.map