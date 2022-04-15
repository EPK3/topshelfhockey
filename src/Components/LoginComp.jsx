import React from 'react'
import './LoginComp.css'
import loginBackground from '../img/login-background.webp'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const LoginComp = () => {
  return (
    <div className='logComp'>
        <img src={loginBackground} />
        <div className='logCard'>
            <div className='logTitle'>
                <Link to='/topshelfhockey' className='link'><FontAwesomeIcon icon={faArrowLeft}/></Link>
                <h1>Login</h1>
            </div>
            <div className='logInput'>
                <input type='username' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
            </div>
            <div className='loginButton'>
                <h3>Login</h3>
                <p>Forgot Your Password?</p>
                <Link to='/register' className='link'>
                    <p>Create New Account</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LoginComp