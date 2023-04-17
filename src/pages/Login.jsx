import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { WEBSITE_NAME  } from '../App'
import Input from '../components/Input'
import { FaArrowLeft } from 'react-icons/fa'
import Swal from 'sweetalert2'

function showAlert() {
    Swal.fire({
        title: 'Create an Account',
        text: "Choose your category",
        icon: 'info',
        showCloseButton: true,
        html:
            '<a href="#"><li class="signup-list">Teacher SignUp</li></a>' +
            '<a href="#"><li class="signup-list">Student SignUp</li></a>',
        confirmButtonText: 'Okay!!'
    
    })
    
}

const Login = () => {
  return (
    <div>

    <Header title={WEBSITE_NAME}/>
        <div className="login-section">
            <div className="login-img">
                <img src="./img/computer labs.svg" />
                <Link style={{display: 'flex', alignItems: 'center', gap: '5px'}} to='/'>
                    <FaArrowLeft />
                    Back to Dashboard
                    </Link>
            </div>
            <div className="login-content">
                <h2>Log In</h2>
                <div>
                    <Input type="username" title='Username' />
                    <Input type="password" title='Password' />

                    <div className="field" style={{display: 'flex', gap: '10px'}}>
                        <input style={{cursor: 'pointer'}} type="checkbox"/>
                        <p>Remember Me</p>
                    </div>
                    <div className="forgot-pwd">
                        <p>Don't have an account, Then <button className="btn filled"style={{padding: '5px 8px', fontWeight: '500'}} onClick={showAlert}>SignUp</button></p>
                    </div>
                </div>
                <Button text='Log In' />
            </div>
        </div>
    </div>
  )
}

export default Login