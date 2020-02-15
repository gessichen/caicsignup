let sharedTranslatorInstance = null;

export class Translator {
    
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
        }

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


export default Translator.sharedTranslator();