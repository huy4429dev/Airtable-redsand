import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class LoginbyGoogle extends Component {
    constructor(props) {
        super(props);
        this.state={
          isLoggedIn: false,
          userID: "",
          name: "",
          email: "",
          picture: ""
        };
    }
    responseGoogle = response => {
      // console.log(response);
      this.setState({
        isLoggedIn: true,
        // userID: response.,
        name: response.profileObj.name,
        email: response.profileObj.email,
        picture: response.profileObj.imageUrl,
        ProviderId:'google'
      });
      // this.setState({googleRespose});
    }
//     componentDidUpdate() {
//       const { name , email } = this.state;
//         var data = {
//             fullName: name,
//             email: email,
//         }
//         fetch('https://localhost:5001/api/loginFaceBook', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: data ?  JSON.stringify(data) : null,
//       })
//           .then(response => response.json())
//           .then(data => {
//               console.log('Success:', data);
//           })
//           .catch((error) => {
//               console.error('Error:', error);
//           });
// }

// componentClicked = () => console.log("clicked");
    
    
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
      <GoogleLogin
        clientId="740434110755-3ppf97i1o6724nru4oengvlv1ooludgn.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      />
    );
  }

  return <div>{fbContent}</div>;
  }
}
export default LoginbyGoogle;