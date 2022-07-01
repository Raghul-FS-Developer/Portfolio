import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import Phone from '../img/phone.png'
import Email from '../img/email.png'
import Address from '../img/address.png'
import emailjs from 'emailjs-com'
import { ThemeContext } from './context'
function Contact() {
  const theme=useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const formRef=useRef()

  const[done,setDone] =useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_xawcgje', 'template_iqdgu75', formRef.current, '7XBT5WpvlQMF-2qym')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="c">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Let's discuss your project</h1>
        <div className="c-info">
          <div className="c-info-item">
            <img src={Phone} alt="" className="c-icon" />
            7639859509
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={Email} alt="" />
            raghulraghu2002@gmail.com
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={Address} alt="" />
            Chennai, Tamil Nadu
          </div>
        </div>
      </div>
      <div className="c-right">
        <p className="c-desc">
          <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input 
          style={{backgroundColor: darkMode && "#333"}}
           type="text" classname="contact-holder" placeholder="Name" name="user_name" />
          <input
           style={{backgroundColor: darkMode && "#333"}} 
          type="text" placeholder="Subject" name="user_subject" />
          <input
           style={{backgroundColor: darkMode && "#333"}}
           type="email" placeholder="Email" name="user_email" />
          <textarea 
          style={{backgroundColor: darkMode && "#333"}} 
          rows="5" placeholder="Message" name="message" />
          <button>Submit</button>
          {done && "Thank you..."}
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact