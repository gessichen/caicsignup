import Head from "next/head";
import React from "react";
import axios from "axios";

let sharedTranslatorInstance = null;

class Translator {
    
    _package = null;
    _ko = null;
    _jp = null;
    _zh = null;
    _en = null;

    constructor() {
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
        }

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
        }

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
        }

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
        }

        this._package = this.en;
    }

    static sharedTranslator() {
        if(sharedTranslatorInstance === null) {
            sharedTranslatorInstance = new Translator();
        }

        return sharedTranslatorInstance;
    }

    setPackage(lang) {

        if(lang === "ko") {
            this._package = this.ko;
        } else if(lang === "jp") {
            this._package = this.jp;
        } else if(lang === "zh") {
            this._package = this.zh;
        } else {
            this._package = this.en;
        }
    }

    getT(oStr) {

        if(this._package.hasOwnProperty(oStr)) {
            return this._package[oStr];
        } else {
            return oStr;
        }
    }
}



const TextInput = ({type, name, label, onChange, placeholder, value, error}) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type={type}
                    name={name}
                    className="form-control input-lg"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      preMobile:"", 
      mobile: "",
      invitation_code: "",
      country: "en"
    }
    this.onChange = this.onChange.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
  }

  componentDidMount() {
    let urlPath = window.location.search;


    if(urlPath.indexOf("invitation") >= 0) {
      let invIndex = urlPath.indexOf("invitation");
      let codeStart = invIndex + 11;
      let codeStr = urlPath.substr(codeStart, 8);

      if(codeStr.length === 8) {
        this.setState({
          invitation_code:  codeStr
        })
      }
    }
  }
  
  onChange(e) {
    return this.setState({[e.target.name]: e.target.value});
  }

  onChangeCountry(e) {
    e.preventDefault();

    this.setState({
      preMobile: e.target.value
    })

    if(e.target.value === "+81") {
      Translator.sharedTranslator().setPackage("jp");
      this.setState({
        country: "jp"
      })
    } else if(e.target.value === "+82") {
      Translator.sharedTranslator().setPackage("ko");
      this.setState({
        country: "ko"
      })
    } else if(e.target.value === "+86") {
      Translator.sharedTranslator().setPackage("zh");
      this.setState({
        country: "zh"
      })
    } else {
      Translator.sharedTranslator().setPackage("en");
      this.setState({
        country: "en"
      })
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

    if(this.formIsValid()) {
      axios.post("http://cicoins.io:8999/api/app/verify/signUpCode", {
        mobile:   this.state.mobile,
        preMobile:  this.state.preMobile
      })
      .then((res) => {
        let resBody = res.data;

        if(resBody.code === 5009) {
          alert(Translator.sharedTranslator().getT("phoneexist"))
        } else if(resBody.code === 0) {

          window.location.href = "/signup?invitation=" + this.state.invitation_code 
          + "&preMobile=" + this.state.preMobile + "&mobile=" + this.state.mobile 
          + "&lang=" + this.state.country;  
        } else {
          alert(Translator.sharedTranslator().getT("cannotregister"))
        }
      })
    }
  }
  
  render() {
    return (
      <div>
        <div className="Register">
          <h2>CAIC</h2>
          <h4>Welcome to CAIC world</h4>
          <form onSubmit={this.submitForm}>

            <div className="form-group">
              <label>{Translator.sharedTranslator().getT("country")}</label>
                <div className="field input-lg">
                  <select onChange={this.onChangeCountry}>
                    <option value="">Select Country</option>
                    <option value="+82">Korea</option>
                    <option value="+81">Japan</option>
                    <option value="+86">China</option>
                  </select>
                </div>
            </div>


            <TextInput
              type="text"
              label= {Translator.sharedTranslator().getT("cellphone")}
              name= "mobile"
              value= {this.state.mobile}
              placeholder= {Translator.sharedTranslator().getT("cellphone")}
              onChange= {this.onChange}
              errors= {null}/>
            <input
              type="submit"
              value={Translator.sharedTranslator().getT("sendcode")}
              className="btn btn-primary btn-lg"/>
          </form>
        </div>  
      </div>
    )
  }
};



export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };    
  }

  render() {
    return (
      <div>
        <Head>
          <title>CAIC</title>
          <link href="https://caicsignup.s3-ap-northeast-1.amazonaws.com/main.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
        </Head>

        <Register />
      </div>
    )
  }
};
