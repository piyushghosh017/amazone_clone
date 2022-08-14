import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" 
                src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"/>
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="text"/>
                    <button className="signin_button">Sign In</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                        </p>
                        <p>Need help?</p>
                    <button className="createAcc_button">Create your Amazon Account</button>
                </form>
                
            </div>
        </div>
    )
}

export default Login
