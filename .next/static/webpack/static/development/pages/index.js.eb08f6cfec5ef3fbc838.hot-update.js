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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/Gess/Desktop/caicsignup/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var sharedTranslatorInstance = null;

var Translator =
/*#__PURE__*/
function () {
  function Translator() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Translator);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "_package", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "_ko", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "_jp", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "_zh", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "_en", null);

    this.ko = {
      "country": "국가",
      "cellphone": "휴대 전화",
      "sendcode": "인증 코드를 보내",
      "sendcodeok": "인증 코드를 성공적으로 전송",
      "userinfo": "기본정보",
      "verificationcode": "확인 코드",
      "username": "아이디",
      "password": "비밀번호",
      "invitationcode": "초대코드",
      "register": "회원가입",
      "signUpSuccessfully": "성공적으로 가입",
      "downloadWallet": "CAIC 지갑을 다운로드하려면 클릭하십시오",
      "phoneformatwrong": "전화 번호 형식이 잘못되었습니다",
      "passwordatleast8": "비밀번호 길이는 6 이상이어야합니다",
      "cannotregister": "지금 등록 할 수 없습니다",
      "phoneexist": "전화 번호가 이미 존재합니다"
    };
    this.en = {
      "country": "Country",
      "cellphone": "Cell Phone",
      "sendcode": "Send Verification Code",
      "sendcodeok": "Send verification code successfully",
      "userinfo": "User information",
      "verificationcode": "Verification Code",
      "username": "User Name",
      "password": "Password",
      "invitationcode": "Invitation Code",
      "register": "Register",
      "signUpSuccessfully": "Sign Up Successfully",
      "downloadWallet": "Click here to download latest CAIC wallet",
      "phoneformatwrong": "Phone number format is wrong!",
      "passwordatleast8": "Password length should be at leaset 6",
      "cannotregister": "Cannot register for now!",
      "phoneexist": "Phone number already exsited!"
    };
    this.zh = {
      "country": "国家",
      "cellphone": "电话号码",
      "sendcode": "发送验证码",
      "sendcodeok": "验证码发送成功",
      "userinfo": "用户信息",
      "verificationcode": "手机验证码",
      "username": "用户名",
      "password": "密码",
      "invitationcode": "邀请码",
      "register": "注册",
      "signUpSuccessfully": "注册成功",
      "downloadWallet": "点击下载最新版本CAIC钱包",
      "phoneformatwrong": "手机格式有误！",
      "passwordatleast8": "密码长度至少为6位",
      "cannotregister": "无法处理注册请求！",
      "phoneexist": "该手机号已经注册过！"
    };
    this.jp = {
      "country": "国",
      "cellphone": "電話番号",
      "sendcode": "確認コードを送信",
      "sendcodeok": "確認コードを正常に送信します",
      "userinfo": "基本情報",
      "verificationcode": "電話確認コード",
      "username": "ユーザ名",
      "password": "パスワード",
      "invitationcode": "招待コード",
      "register": "新規登録",
      "signUpSuccessfully": "正常に登録する",
      "downloadWallet": "クリックしてCAICウォレットをダウンロード",
      "phoneformatwrong": "電話の形式が間違っています！",
      "passwordatleast8": "最小文字数は6です。もう一度入力してください",
      "cannotregister": "サインアップできません！",
      "phoneexist": "電話番号はすでに存在しています！"
    };
    this._package = this.en;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Translator, [{
    key: "setPackage",
    value: function setPackage(lang) {
      if (lang === "ko") {
        this._package = this.ko;
      } else if (lang === "jp") {
        this._package = this.jp;
      } else if (lang === "zh") {
        this._package = this.zh;
      } else {
        this._package = this.en;
      }
    }
  }, {
    key: "getT",
    value: function getT(oStr) {
      if (this._package.hasOwnProperty(oStr)) {
        return this._package[oStr];
      } else {
        return oStr;
      }
    }
  }], [{
    key: "sharedTranslator",
    value: function sharedTranslator() {
      if (sharedTranslatorInstance === null) {
        sharedTranslatorInstance = new Translator();
      }

      return sharedTranslatorInstance;
    }
  }]);

  return Translator;
}();

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
      lineNumber: 134
    },
    __self: this
  }, __jsx("label", {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, label), __jsx("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
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
      lineNumber: 137
    },
    __self: this
  }), error && __jsx("div", {
    className: "alert alert-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, error)));
};

var Register =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Register, _React$Component);

  function Register(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Register);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(Register).call(this, props));
    _this.state = {
      preMobile: "",
      mobile: "",
      invitation_code: "",
      country: "en"
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onChangeCountry = _this.onChangeCountry.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.formIsValid = _this.formIsValid.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var urlPath = window.location.search;

      if (urlPath.indexOf("invitation") >= 0) {
        var invIndex = urlPath.indexOf("invitation");
        var codeStart = invIndex + 11;
        var codeStr = urlPath.substr(codeStart, 8);
        alert(codeStr);

        if (codeStr > 8) {
          this.setState({
            invitation_code: components[1]
          });
        }
      }

      var components = urlPath.split("=");

      if (components.length > 1) {}
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      return this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "onChangeCountry",
    value: function onChangeCountry(e) {
      e.preventDefault();
      this.setState({
        preMobile: e.target.value
      });

      if (e.target.value === "+81") {
        Translator.sharedTranslator().setPackage("jp");
        this.setState({
          country: "jp"
        });
      } else if (e.target.value === "+82") {
        Translator.sharedTranslator().setPackage("ko");
        this.setState({
          country: "ko"
        });
      } else if (e.target.value === "+86") {
        Translator.sharedTranslator().setPackage("zh");
        this.setState({
          country: "zh"
        });
      } else {
        Translator.sharedTranslator().setPackage("en");
        this.setState({
          country: "en"
        });
      }
    }
  }, {
    key: "formIsValid",
    value: function formIsValid() {
      var isValid = true;

      if (this.state.mobile.length < 10) {
        isValid = false;
        alert(Translator.sharedTranslator().getT("phoneformatwrong"));
      }

      return isValid;
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.formIsValid()) {
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("http://cicoins.io:8999/api/app/verify/signUpCode", {
          mobile: this.state.mobile,
          preMobile: this.state.preMobile
        }).then(function (res) {
          var resBody = res.data;

          if (resBody.code === 5009) {
            alert(Translator.sharedTranslator().getT("phoneexist"));
          } else if (resBody.code === 0) {
            alert(Translator.sharedTranslator().getT("sendcodeok"));
            window.location.href = "/signup?invitation=" + _this2.state.invitation_code + "&preMobile=" + _this2.state.preMobile + "&mobile=" + _this2.state.mobile + "&lang=" + _this2.state.country;
          } else {
            alert(Translator.sharedTranslator().getT("cannotregister"));
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, __jsx("div", {
        className: "Register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "CAIC"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "Welcome to CAIC world"), __jsx("form", {
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, Translator.sharedTranslator().getT("country")), __jsx("div", {
        className: "field input-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, __jsx("select", {
        onChange: this.onChangeCountry,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, __jsx("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "Select Country"), __jsx("option", {
        value: "+82",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "Korea"), __jsx("option", {
        value: "+81",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "Japan"), __jsx("option", {
        value: "+86",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "China")))), __jsx(TextInput, {
        type: "text",
        label: Translator.sharedTranslator().getT("cellphone"),
        name: "mobile",
        value: this.state.mobile,
        placeholder: Translator.sharedTranslator().getT("cellphone"),
        onChange: this.onChange,
        errors: null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: Translator.sharedTranslator().getT("sendcode"),
        className: "btn btn-primary btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;

var Index =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component2);

  function Index(props) {
    var _this3;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Index);

    _this3 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(Index).call(this, props));
    _this3.state = {};
    return _this3;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "CAIC"), __jsx("link", {
        href: "https://caicsignup.s3-ap-northeast-1.amazonaws.com/main.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }), __jsx("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      })), __jsx(Register, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);


;

/***/ })

})
//# sourceMappingURL=index.js.eb08f6cfec5ef3fbc838.hot-update.js.map