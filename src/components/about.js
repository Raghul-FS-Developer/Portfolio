import React, { useState } from "react";
import "./about.css";
import Me from "../img/PicsArt_06-29-04.46.24.jpg";
import Typical from "react-typical";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className="a-img" src={Me} />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me   
        </h1>
        <p className="a-sub">
          Hello! I am a Fresher from Chennai, I have a good knowledge in Web
          development and always ready to learn new technologies. Dedicated to
          creating and optimizing interactive, user-friendly and feature-rich
          web applications, Exposure to both Front-end & Back-end web
          development.
        </p>
        <p className="a-desc">
          My dream to build a Artificial intelligent web development tool(So i'm
          intrested in Webdevelopment).
          <br/>
          <br />
          <Typical 
        steps ={["Failure is an option here. If things are not failing, your are not innovating enough by Elon Musk",2000,"APJ once said Winners Are Not Those Who Never Fail But Those Who Never Quit.",2000]}
        loop ={Infinity}
        />
          
        </p>
      </div>
    </div>
  );
}

export default About;
