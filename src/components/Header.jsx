import React from 'react'
import { FaGraduationCap, FaUser, FaSearch, FaDoorOpen } from 'react-icons/fa'

const standard_icon_size = 25

const Header = ({title}) => {
  return (
    <div className='header'>
        <div className='header-components'>
            <FaGraduationCap size={40}/>
            <h2>{title}</h2>
        </div>
        <div className='header-components'>
            {/* <FaRightFromBracket size={standard_icon_size} /> */}
            <FaSearch size={standard_icon_size} color='#2ec712' />
            <FaUser size={standard_icon_size} color='#2ec712' />
            <FaDoorOpen size={standard_icon_size} color='#2ec712'/>
        </div>
    </div>
  )
}

export default Header