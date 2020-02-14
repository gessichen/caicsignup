import Head from "next/head";

import React from "react";
import { Button} from "reactstrap";


class Welcome extends React.Component {
  
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  
  onClick(e) {
      window.location="https://baidu.com";
  }
  
  render() {
    return (
      <div>
        <div className="Register">
          <h2>Sign up successfully!</h2>

        <Button
            color="success"
            size="lg"
            onClick={this.onClick}
        >Click here to download lastest CAIC wallet</Button>
    
        </div>  
      </div>
    )
  }
};



export default class Finish extends React.Component {
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

        <Welcome />
      </div>
    )
  }
};
