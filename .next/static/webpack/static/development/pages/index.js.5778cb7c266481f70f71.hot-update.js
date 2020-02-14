webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/Gess/Desktop/caicsignup/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;






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
      lineNumber: 15
    },
    __self: this
  }, __jsx("label", {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, label), __jsx("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
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
      lineNumber: 18
    },
    __self: this
  }), error && __jsx("div", {
    className: "alert alert-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, error)));
};

var Register =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Register, _React$Component);

  function Register(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Register);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Register).call(this, props));
    _this.state = {
      preMobile: "",
      mobile: "",
      alert_show: false,
      alert_title: "123",
      invitation_code: ""
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangeCountry = _this.onChangeCountry.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.formIsValid = _this.formIsValid.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var urlPath = window.location.search;
      var components = urlPath.split("=");

      if (components.length > 1) {
        this.setState({
          invitation_code: components[1]
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      return this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "onChangeCountry",
    value: function onChangeCountry(e) {
      e.preventDefault();
      this.setState({
        preMobile: e.target.value
      });
    }
  }, {
    key: "formIsValid",
    value: function formIsValid() {
      var isValid = true;

      if (this.state.mobile.length < 10) {
        isValid = false;
        alert("mobile number format is not right!");
      }

      return isValid;
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])(),
          name = _useRouter.query.name;

      alert(query);
      window.location = "https://baidu.com";
      e.preventDefault();

      if (this.formIsValid()) {
        axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://cicoins.io:8999/api/app/verify/signUpCode", {
          mobile: this.state.mobile,
          preMobile: this.state.preMobile
        }).then(function (res) {
          var resBody = res.data;

          if (resBody.code === 5009) {
            alert("Mobile number is already registered!");
          } else if (resBody.code === 0) {} else {}
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("div", {
        className: "Register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Register"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Production Company"), __jsx("form", {
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Country"), __jsx("div", {
        className: "field input-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("select", {
        onChange: this.onChangeCountry,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("option", {
        value: "+82",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Korea"), __jsx("option", {
        value: "+81",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Japan"), __jsx("option", {
        value: "+86",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "China")))), __jsx(TextInput, {
        type: "text",
        label: "Cell Phone",
        name: "mobile",
        value: this.state.mobile,
        placeholder: "cell phone",
        onChange: this.onChange,
        errors: null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: "Register",
        className: "btn btn-primary btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

;

var Index =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component2);

  function Index(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this2.state = {};
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "CAIC"), __jsx("link", {
        href: "https://caicsignup.s3-ap-northeast-1.amazonaws.com/main.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), __jsx("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      })), __jsx(Register, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);


;

/***/ })

})
//# sourceMappingURL=index.js.5778cb7c266481f70f71.hot-update.js.map