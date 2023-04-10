import React from 'react'
import { FaBookOpen } from 'react-icons/fa'

const Facts = (url) => {
  return (
    <div className='facts-section'>
        <h2 className='title'>Facts About Us</h2>
        <div className="facts-section-container">
            <div className="fact">
                <img src='../../public/img/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg' alt="" />
                <p>Boarding Facilities</p>
            </div>
            <div className="fact">
                <img src='../../public/img/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg' alt="" />
                <p>E-learning Platform</p>
            </div>
            <div className="fact">
                <img src='../../public/img/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg' alt="" />
                <p></p>
            </div>
            <div className="fact">
                {/* <img src='../../public/img/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg' alt="" /> */}
                <FaBookOpen />
                <p>Functional Library</p>
            </div>
            <div className="fact">
                <img src='../../public/img/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg' alt="" />
                <p>Simple</p>
            </div>
            <div className="fact">
                <img src='../../public/img/priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg' alt="" />
                <p>Simple</p>
            </div>
        </div>
    </div> 
  )
}

export default Facts