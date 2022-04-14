import React from 'react'
import './LoginComp.css'
import loginBackground from '../img/login-background.webp'

const LoginComp = () => {
  return (
    <div className='logComp'>
        <img src={loginBackground} />
        <div className='logCard'>
            <div className='logTitle'>
                <h1>Login</h1>
            </div>
            <div className='logInput'>
                <input type='username' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
            </div>
            <div className='loginButton'>
                <h3>Login</h3>
                <p>Forgot Your Password?</p>
                <p>Create new account</p>
            </div>
        </div>
    </div>
  )
}

export default LoginComp