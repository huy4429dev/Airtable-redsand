import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
      };
    }
  responseFacebook = response => {
    // console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };
componentDidUpdate() {
 const { name , email } = this.state;
        var data = {
            fullName: name,
            email: email,
        }
        fetch('https://localhost:5001/api/loginFaceBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data ?  JSON.stringify(data) : null,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
}

componentClicked = () => console.log("clicked");

  render() {
          console.log(this.state.name);
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="2663144950597479"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
// appId="740434110755-3ppf97i1o6724nru4oengvlv1ooludgn.apps.googleusercontent.com"