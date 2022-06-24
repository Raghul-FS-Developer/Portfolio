import React from 'react'
import './intro.css'
import Me from "../img/me3.png"
function Intro() {

  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Raghul</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Enthusiastic Dev</div>
                        <div className='i-title-item'>Full Stack Developer</div>
                        <div className='i-title-item'>MERN Dev</div>
                        <div className='i-title-item'>Responsive Web Designer</div>
                    </div>
                </div>
                <p className='i-desc'>
                Knack of building applications with front and back end operations.
                </p>
            </div>
          
        </div>
        <div className='i-right'>

            <div className='i-bg'></div>
            <img src={Me} className='i-img'/>
        </div>
    </div>
  )
}

export default Intro