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







var _jsxFileName = "/Users/Gess/Desktop/caicsignup/pages/signup.js";
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
      "sendcodeok": "",
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
      "sendcodeok": "",
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
      lineNumber: 133
    },
    __self: this
  }, __jsx("label", {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, label), __jsx("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
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
      lineNumber: 136
    },
    __self: this
  }), error && __jsx("div", {
    className: "alert alert-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, error)));
};

var UserInfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(UserInfo, _React$Component);

  function UserInfo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, UserInfo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(UserInfo).call(this, props));
    _this.state = {
      verification_code: "",
      invitation_code: "",
      password: "",
      user_name: "",
      mobile: "",
      preMobile: "",
      country: "en"
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.formIsValid = _this.formIsValid.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(UserInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var urlPath = window.location.search; //alert(urlPath);

      var components = urlPath.split("&");

      if (components.length !== 4) {
        window.location.href = "/";
      } else {
        var invitation = components[0].split("=")[1];
        var preMobile = components[1].split("=")[1];
        var mobile = components[2].split("=")[1];
        var country = components[3].split("=")[1];
        Translator.sharedTranslator().setPackage(country);
        this.setState({
          invitation_code: invitation,
          mobile: mobile,
          preMobile: preMobile,
          country: country
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      return this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "formIsValid",
    value: function formIsValid() {
      var isValid = true;

      if (this.state.password.length < 8) {
        alert(Translator.sharedTranslator().getT("passwordatleast8"));
        return false;
      }

      if (this.state.user_name.trim().length === 0) {
        alert(Translator.sharedTranslator().getT("cannotregister"));
        return false;
      }

      if (this.state.invitation_code.trim().length === 0) {
        alert(Translator.sharedTranslator().getT("cannotregister"));
        return false;
      }

      if (this.state.verification_code.trim().length === 0) {
        alert(Translator.sharedTranslator().getT("cannotregister"));
        return false;
      }

      return isValid;
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.formIsValid()) {
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("http://cicoins.io:8999/api/app/user/register", {
          "preMobile": this.state.preMobile,
          "mobile": this.state.mobile,
          "userName": this.state.user_name,
          "password": this.state.password,
          "code": this.state.verification_code,
          "inviteCode": this.state.invitation_code
        }).then(function (res) {
          var data = res.data;

          if (data.code === 0) {
            window.location = "/finish?lang=" + _this2.state.country;
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
          lineNumber: 254
        },
        __self: this
      }, __jsx("div", {
        className: "Register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "CAIC"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, Translator.sharedTranslator().getT("userinfo")), __jsx("form", {
        onSubmit: this.submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, __jsx(TextInput, {
        type: "text",
        label: Translator.sharedTranslator().getT("verificationcode"),
        name: "verification_code",
        value: this.state.verification_code,
        placeholder: Translator.sharedTranslator().getT("verificationcode"),
        onChange: this.onChange,
        errors: null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }), __jsx(TextInput, {
        type: "text",
        label: Translator.sharedTranslator().getT("username"),
        name: "user_name",
        value: this.state.user_name,
        placeholder: Translator.sharedTranslator().getT("username"),
        onChange: this.onChange,
        errors: null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }), __jsx(TextInput, {
        type: "password",
        label: Translator.sharedTranslator().getT("password"),
        name: "password",
        value: this.state.password,
        placeholder: Translator.sharedTranslator().getT("password"),
        onChange: this.onChange,
        errors: null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }), __jsx(TextInput, {
        type: "text",
        label: Translator.sharedTranslator().getT("invitationcode"),
        name: "invitation_code",
        value: this.state.invitation_code,
        placeholder: Translator.sharedTranslator().getT("invitationcode"),
        onChange: this.onChange,
        errors: null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: Translator.sharedTranslator().getT("register"),
        className: "btn btn-primary btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Signup, _React$Component2);

  function Signup(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Signup);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(Signup).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Signup, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "CAIC"), __jsx("link", {
        href: "https://caicsignup.s3-ap-northeast-1.amazonaws.com/main.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }), __jsx("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      })), __jsx(UserInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
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
//# sourceMappingURL=signup.js.0b488b2b30611278e848.hot-update.js.map