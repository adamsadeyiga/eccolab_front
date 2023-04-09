import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <div className='main'>
        <div className="main-content">
            <h2 className='title'>Welcome to Eccowas College</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illum hic facere exercitationem ipsum eligendi, odio a blanditiis ab, voluptate ipsa, et animi aspernatur unde eveniet odit doloremque accusamus vero beatae nihil amet veniam!</p>
            <div className="btn-holders">
              <Button text="LogIn" classStatus={true}/>
              <Button text="SignUp" />
            </div>
        </div>
    </div>
  )
}

export default Main