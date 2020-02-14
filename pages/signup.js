import Head from "next/head";
import React from "react";
import axios from "axios";

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

class UserInfo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      verification_code:"", 
      invitation_code: "",
      password: "",
      user_name: "",

      mobile:   "",
      preMobile: "",
    }
    this.onChange = this.onChange.bind(this);

    this.submitForm = this.submitForm.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
  }

  componentDidMount() {
    let urlPath = window.location.search;

    //alert(urlPath);

    let components = urlPath.split("&");
    if(components.length !== 3) {
        alert("Information not complete");
    } else {
        let invitation = components[0].split("=")[1]; 
        let preMobile = components[1].split("=")[1]; 
        let mobile = components[2].split("=")[1]; 

        this.setState({
            invitation_code:    invitation,
            mobile:             mobile,
            preMobile:          preMobile
        })
    }
  }
  
  onChange(e) {

    return this.setState({[e.target.name]: e.target.value});
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

    if(this.formIsValid()) {
      axios.post("http://cicoins.io:8999/api/app/user/register", {
        "preMobile": this.state.preMobile,
        "mobile":   this.state.mobile,
        "userName": this.state.user_name,
        "password": this.state.password,
        "code": this.state.verification_code,
        "inviteCode":this.state.invitation_code
      })
      .then((res) => {
        let data = res.data;

        if(data.code === 0) {
            window.location="/finish";
        } else {
            alert("Register failed");
        }
      })
    }
  }
  
  render() {
    return (
      <div>
        <div className="Register">
          <h2>Register</h2>
          <h4>Production Company</h4>
          <form onSubmit={this.submitForm}>


            <TextInput
              type="text"
              label= "Verification Code"
              name= "verification_code"
              value= {this.state.verification_code}
              placeholder= "Mobile verification code"
              onChange= {this.onChange}
              errors= {null}/>


            <TextInput
              type="text"
              label= "User Name"
              name= "user_name"
              value= {this.state.user_name}
              placeholder= "User name"
              onChange= {this.onChange}
              errors= {null}/>


            <TextInput
              type="password"
              label= "Password"
              name= "password"
              value= {this.state.password}
              placeholder= "Password should be at least 8 characters"
              onChange= {this.onChange}
              errors= {null}/>

            <TextInput
              type="text"
              label= "Invitation Code"
              name= "invitation_code"
              value= {this.state.invitation_code}
              placeholder= "invitation code"
              onChange= {this.onChange}
              errors= {null}/>

            <input
              type="submit"
              value="Register"
              className="btn btn-primary btn-lg"/>
          </form>
        </div>  
      </div>
    )
  }
};



export default class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>CAIC</title>
          <link href="https://caicsignup.s3-ap-northeast-1.amazonaws.com/main.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
        </Head>

        <UserInfo />
      </div>
    )
  }
};
