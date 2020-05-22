import React, { Component } from 'react';

import { GoogleLogout } from 'react-google-login';
class GoogleLogout1 extends Component {
    render() {
        return (
            <div>
            <GoogleLogout
            clientId="740434110755-3ppf97i1o6724nru4oengvlv1ooludgn.apps.googleusercontent.com"
            buttonText="Logout"
            // onLogoutSuccess={logout}
          />
            </div>
        );
    }
}
export default GoogleLogout1;
