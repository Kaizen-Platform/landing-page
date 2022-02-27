import React, {useState} from 'react';
import {GoogleLogin, GoogleLogout} from "react-google-login";

const NewLogin =() => { 
    

const clientId = "271664738693-kjehb5fvkkb3pkaeinspq0nbqeier7fg.apps.googleusercontent.com";
const [showloginButton, setShowloginButton] = useState(true);
const [showLogoutButton, setShowlogoutButton] = useState(false);

const onLoginSuccess = (res) => {
    console.log("Login Success :", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);

}
const onFailureSuccess = (res) => {
    console.log("Login Failed :", res);
}
const onSignoutSuccess = () => {
    alert("You have been successfully signed out");
    setShowloginButton(true);
    setShowlogoutButton(false);
}
return (
    <div>
        {showloginButton ? 
        <GoogleLogin
        clientId= {clientId}
        buttonText="Sign in with Google"
        onSuccess={onLoginSuccess}
        onFailure={onFailureSuccess}
        cookiePolicy={"single_host_origin"} /> : null
        }
        {showLogoutButton ?
        <GoogleLogout
        clientId={clientId}
        buttonText="Sign out with Google"
        onLogoutSuccess={onSignoutSuccess} >
            </GoogleLogout> : null
            }
           </div>
);
}
export default NewLogin;