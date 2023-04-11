import React from 'react'
import Header from './Header'
import Button from './Button'
import Input from './Input'


const Login = () => {
  return (
    <div>
        <Header title={WEBSITE_NAME} />

        <div className="login-section">
            <div className="login-img">
                <img src="../../public/img/computer labs.svg" />
            </div>
            <div className="login-content">
                {/* <div className="login-tabs">

                </div>
                <div className="login-tab-section">
                    <div className="admin">

                    </div>
                    <div className="student"></div>
                </div> */}
                <h2>Log In</h2>
                <div>
                    <Input type="username" title='Username' />
                    <Input type="password" title='Password' />
                </div>
                <Button />
            </div>
        </div>


    </div>
  )
}

export default Login