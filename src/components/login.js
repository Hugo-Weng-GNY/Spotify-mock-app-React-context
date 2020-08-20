import React from 'react'
import './login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            <h1>I'm the login page</h1>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;