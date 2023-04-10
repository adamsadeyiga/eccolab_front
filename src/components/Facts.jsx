import React from 'react'
import { FaBookOpen } from 'react-icons/fa'

const Facts = (url) => {
  return (
    <div className='facts-section'>
        <h2 className='title'>Facts About Us</h2>
        <div className="facts-section-container">
            <div className="fact">
                <img src='../../public/img/hostel.svg' alt="" />
                <p>Boarding Facilities</p>
            </div>
            <div className="fact">
                <img src='../../public/img/e-learning.svg' alt="" />
                <p>E-learning Platform</p>
            </div>
            <div className="fact">
                <img src='../../public/img/computer labs.svg' alt="" />
                <p>Furnished Computer Labs</p>
            </div>
            <div className="fact">
                <img src='../../public/img/books library.svg' alt="" />
                <p>Functional Library</p>
            </div>
            <div className="fact">
                <img src='../../public/img/sports.svg' alt="" />
                <p>Extra Curricular Activities</p>
            </div>
            <div className="fact">
                <img src='../../public/img/excursions.svg' alt="" />
                <p>Excursions</p>
            </div>
        </div>
    </div> 
  )
}

export default Facts