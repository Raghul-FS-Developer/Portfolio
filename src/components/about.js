import React, { useState } from 'react'
import './about.css'
import Me from "../img/PicsArt_06-29-04.46.24.jpg"
import Typical from 'react-typical'


function About() {
  
 const[start,setStart]=useState(false)
 const[start2,setStart2]=useState(false)

 setTimeout(() => {
     setStart(true)
 }, 19500);
 setTimeout(() => {
  setStart2(true)
}, 25000);


  return (
    <div className='a'>
        <div className='a-left'>
        <div className='a-card bg'></div>    
        <div className='a-card'>
            <img className='a-img' src={Me}/>
        </div>
        </div>    
        <div className='a-right'>
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        <Typical
           steps={['Hello! I am a Fresher from Chennai, I have a good knowledge in Web development and always ready to learn new technologies. Dedicated to creating and optimizing interactive, user-friendly and feature-rich web applications, Exposure to both Front-end & Back-end web development.', 1000]}
           loop={Infinity}
            />           
        </p>
        <p className="a-desc">
        {start &&
           <Typical
           steps={[" My dream to build a Artificial intelligent web development tool(So i'm intrested in Webdevelopment).", 1000]}
           loop={Infinity}
   
         /> 
       
        }
        <br/>
      
        {start2 && 
        <Typical
        steps={[' APJ once  said Winners Are Not Those Who Never Fail But Those Who Never Quit.']}
        loop={Infinity}
      /> 
        }
     
  
      
        </p>

            </div>    
    </div>
  )
}

export default About