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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let sharedTranslatorInstance = null;

class Translator {
  constructor() {
    _defineProperty(this, "_package", null);

    _defineProperty(this, "_ko", null);

    _defineProperty(this, "_jp", null);

    _defineProperty(this, "_zh", null);

    _defineProperty(this, "_en", null);

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

  static sharedTranslator() {
    if (sharedTranslatorInstance === null) {
      sharedTranslatorInstance = new Translator();
    }

    return sharedTranslatorInstance;
  }

  setPackage(lang) {
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

  getT(oStr) {
    if (this._package.hasOwnProperty(oStr)) {
      return this._package[oStr];
    } else {
      return oStr;
    }
  }

}

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
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, label), __jsx("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
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
      lineNumber: 136
    },
    __self: undefined
  }), error && __jsx("div", {
    className: "alert alert-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
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
      preMobile: "",
      country: "en"
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
  }

  componentDidMount() {
    let urlPath = window.location.search; //alert(urlPath);

    let components = urlPath.split("&");

    if (components.length !== 4) {
      window.location.href = "/";
    } else {
      let invitation = components[0].split("=")[1];
      let preMobile = components[1].split("=")[1];
      let mobile = components[2].split("=")[1];
      let country = components[3].split("=")[1];
      Translator.sharedTranslator().setPackage(country);
      this.setState({
        invitation_code: invitation,
        mobile: mobile,
        preMobile: preMobile,
        country: country
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
          window.location = "/finish?lang=" + this.state.country;
        } else {
          alert(Translator.sharedTranslator().getT("cannotregister"));
        }
      });
    }
  }

  render() {
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
        lineNumber: 317
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
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

}
;

/***/ }),

/***/ 5:
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