import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='main'>
        <div className="main-content">
            <h2 className='title'>Welcome to Eccowas College</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illum hic facere exercitationem ipsum eligendi, odio a blanditiis ab, voluptate ipsa, et animi aspernatur unde eveniet odit doloremque accusamus vero beatae nihil amet veniam!</p>
            <div className="btn-holders">
              <Link to="/login">
                <Button text="LogIn" classStatus={true}/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Main