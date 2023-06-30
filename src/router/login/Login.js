import React from 'react'
import "./Login.css"

import {
    FacebookLoginButton,
    GoogleLoginButton,
    AppleLoginButton
} from "react-social-login-buttons";

function Login() {
  return (
    <div className='login'>
        <div className="login__wrapper">
        <div className='login__collection'>
            <div className="face-login">
        <FacebookLoginButton/>
            </div>
            <div className="apple-login">
        <AppleLoginButton/>
            </div>
            <div className="google-login">
        <GoogleLoginButton/>
            </div>
        </div>

        <div className="login-other-txt">
            <h1><hr /> <font>YOKI</font> <hr /></h1>

        </div>

        <div className="kirish-register">
            <div className="part1">
                <h1>Kirish</h1>
                {/* <hr /> */}
                <h2>____________</h2>
            </div>
            <div className="part2">
                <h1>Ro'yxatdan o'tish</h1>
                <hr />
            </div>
        </div>

        <div className="login-inputs">
            <div className="part1">
                <h2>Telefon raqam yoki Email</h2>
                <input type="text" />
            </div> <br />
            <div className="part1">
                <h2>Parol</h2>
                <input type="password" />
            </div>
        </div> <br /><br />

        <div className="forget-pass">
            <h2>Parolni unutdingizmi?</h2>
        </div>

        <div className="login-btn">
            <button>KIRISH</button>
        </div>

        </div>
       
    </div>
  )
}

export default Login