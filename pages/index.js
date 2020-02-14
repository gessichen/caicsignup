import Head from "next/head";

import { useRouter } from "next/router";

import React from "react";
import { Alert} from "reactstrap";
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

class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      preMobile:"", 
      mobile: "",
      invitation_code: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
  }

  componentDidMount() {
    let urlPath = window.location.search;

    let components = urlPath.split("=");
    
    if(components.length > 1) {

      this.setState({
        invitation_code:  components[1]
      })
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
  }
  
  formIsValid() {

    let isValid = true;

    if (this.state.mobile.length < 10) {

      isValid = false;

      alert("mobile number format is not right!");
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
          alert("Mobile number is already registered!")
        } else if(resBody.code === 0) {
          window.location.href = "/signup?invitation=" + this.state.invitation_code 
          + "&preMobile=" + this.state.preMobile + "&mobile=" + this.state.mobile;  
        } else {
          alert("Cannot register for now!")
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

            <div class="form-group">
              <label>{"Country"}</label>
                <div className="field input-lg">
                  <select onChange={this.onChangeCountry}>
                    <option value="+82">Korea</option>
                    <option value="+81">Japan</option>
                    <option value="+86">China</option>
                  </select>
                </div>
            </div>


            <TextInput
              type="text"
              label= "Cell Phone"
              name= "mobile"
              value= {this.state.mobile}
              placeholder= "cell phone"
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
