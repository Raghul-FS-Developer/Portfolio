import './interest.css'
import React from 'react'
import web from "../img/web.png"
function Interest() {
  return (
    <div className='i1'>
        <h1 className='i1-title'>Interest</h1>
       <div className='i1-head'>
        <div className='i1-sub'>
            <img className='i1-img' src={web}/>
            <p className='i1-subs'>Web Development</p>
       </div>
        <div className='i1-sub'>
            <img className='i1-img' src='https://www.thedoctors.com/siteassets/images/logos/ai.png'/>
            <p className='i1-subs'>Artificial Intelligence</p>
        </div>
        <div className='i1-sub'>
            <img className='i1-img' src='https://5.imimg.com/data5/HR/OD/TW/ANDROID-18794965/product-jpeg-500x500.jpeg'/>
            <p className='i1-subs'>Home Automation</p>
        </div>
       </div>
    </div>
  )
}

export default Interest