import React from 'react'
import './RegisterComp.css'
import registerBackground from '../img/register-background.webp'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const RegisterComp = () => {
  return (
    <div className='regComp'>
        <img src={registerBackground} />
        <div className='regCard'>
            <div className='regTitle'>
                <Link to='/' className='link'><FontAwesomeIcon icon={faArrowLeft}/></Link>
                <h1>Create An Account</h1>
            </div>
            <div className='regInput'>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
                <input type='username' placeholder='Username'/>
                <input type='email' placeholder='E-mail'/>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Confirm Password'/>
            </div>
            <div className='regCreate'>
                <p>By creating an account, I consent to the processing of my personal data in accordance with the <h2>Privacy Policy.</h2></p>
                <h3>Create</h3>
            </div>
        </div>
    </div>
  )
}

export default RegisterComp