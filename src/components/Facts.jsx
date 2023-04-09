import React from 'react'

const Facts = (url) => {
  return (
    <div className='facts-section'>
        <h2 className='title'>Facts About Us</h2>
        <div className="facts-section-container">
            <div className="fact">
                <img src={url} alt="" />
                <p>Simple</p>
            </div>
            <div className="fact">
                <img src={url} alt="" />
                <p>Simple</p>
            </div>
            <div className="fact">
                <img src={url} alt="" />
                <p>Simple</p>
            </div>
            <div className="fact">
                <img src={url} alt="" />
                <p>Simple</p>
            </div>
            <div className="fact">
                <img src={url} alt="" />
                <p>Simple</p>
            </div>
            <div className="fact">
                <img src={url} alt="" />
                <p>Simple</p>
            </div>
        </div>
    </div> 
  )
}

export default Facts