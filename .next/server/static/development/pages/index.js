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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Gess/Desktop/caicsignup/pages/index.js";
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
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, label), __jsx("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
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
      lineNumber: 137
    },
    __self: undefined
  }), error && __jsx("div", {
    className: "alert alert-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, error)));
};

class Register extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      preMobile: "",
      mobile: "",
      invitation_code: "",
      country: "en"
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
  }

  componentDidMount() {
    let urlPath = window.location.search;
    let components = urlPath.split("=");

    if (components.length > 1) {
      this.setState({
        invitation_code: components[1]
      });
    }
  }

  onChange(e) {
    return this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeCountry(e) {
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
        country: "jp"
      });
    }
  }

  formIsValid() {
    let isValid = true;

    if (this.state.mobile.length < 10) {
      isValid = false;
      alert(Translator.sharedTranslator().getT("phoneformatwrong"));
    }

    return isValid;
  }

  submitForm(e) {
    e.preventDefault();

    if (this.formIsValid()) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://cicoins.io:8999/api/app/verify/signUpCode", {
        mobile: this.state.mobile,
        preMobile: this.state.preMobile
      }).then(res => {
        let resBody = res.data;

        if (resBody.code === 5009) {
          alert(Translator.sharedTranslator().getT("phoneexist"));
        } else if (resBody.code === 0) {
          alert(Translator.sharedTranslator().getT("sendcodeok"));
          window.location.href = "/signup?invitation=" + this.state.invitation_code + "&preMobile=" + this.state.preMobile + "&mobile=" + this.state.mobile + "&lang=" + this.state.country;
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
        lineNumber: 257
      },
      __self: this
    }, __jsx("div", {
      className: "Register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, "CAIC"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, "Welcome to CAIC world"), __jsx("form", {
      onSubmit: this.submitForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, Translator.sharedTranslator().getT("country")), __jsx("div", {
      className: "field input-lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, __jsx("select", {
      onChange: this.onChangeCountry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, __jsx("option", {
      value: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, "Select Country"), __jsx("option", {
      value: "+82",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, "Korea"), __jsx("option", {
      value: "+81",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, "Japan"), __jsx("option", {
      value: "+86",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
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
        lineNumber: 276
      },
      __self: this
    }), __jsx("input", {
      type: "submit",
      value: Translator.sharedTranslator().getT("sendcode"),
      className: "btn btn-primary btn-lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }))));
  }

}

;
class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, "CAIC"), __jsx("link", {
      href: "https://caicsignup.s3-ap-northeast-1.amazonaws.com/main.css",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }), __jsx("link", {
      href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    })), __jsx(Register, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }));
  }

}
;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Gess/Desktop/caicsignup/pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map