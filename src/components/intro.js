import React from 'react'
import './intro.css'

import Me2 from "../img/IMG-20210301-WA0029 (9).jpg"

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
                I'm a Full-Stack-Developer knack of building web applications with Front and Back-End operations.
                </p>
            </div>
          
        </div>
        <div className='i-right'>

            <div className='i-bg'><img src={Me2}  className='i-img'/></div>
            {/* <img src={Me}/> */}
        </div>
    </div>
  )
}

export default Intro