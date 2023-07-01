import "./skills.css";
import ex from "../img/express.png"
import React from "react";

function Skills() {
  return (
    <div className="s1">
      <div className="sl-texts">
        <h1 className="sl-title">Skills</h1>
        <p className="sl-desc">Things I Code With</p>
        <div className="s1-tools-head">
        <div className="tools">
            <img  className="s1-img" src="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
            <p className="sub">HTML</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"/>
            <p className="sub">CSS</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn33U4msAO3aApavbY3to8duyEKQyxh1kGdw1uhQD5QUTxpS3y2OgxPhuzrW-VbKTg4po&usqp=CAU"/>
            <p className="sub">SaSS</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/>
            <p className="sub">JavaScript</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"/>
            <p className="sub">Bootstrap</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
            <p className="sub">React</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png"/>
            <p className="sub">Node</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src={ex}/>
            <p className="sub">Express</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://thekenyandev.com/static/ba180df420dbaffd7405a0f65764feab/cover.png"/>
            <p className="sub">JWT</p>
        </div>  
        <div className="tools">
            <img  className="s1-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png"/>
            <p className="sub">Socket.IO</p>
        </div>  
        <div className="tools">
            <img  className="s1-img" src="https://previews.123rf.com/images/khaliddjw/khaliddjw1802/khaliddjw180200013/96272873-password-encryption-icon.jpg"/>
            <p className="sub">Bcryptjs</p>
        </div>  
        <div className="tools">
            <img  className="s1-img" src="https://ih1.redbubble.net/image.438912065.6243/flat,1000x1000,075,f.u3.jpg"/>
            <p className="sub">Mongoose</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://img.icons8.com/color/480/mongodb.png"/>
            <p className="sub">MongoDB</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"/>
            <p className="sub">MySQL</p>
        </div>
        <div className="tools">
            <img  className="s1-img" src="https://miro.medium.com/max/1400/1*b_al7C5p26tbZG4sy-CWqw.png"/>
            <p className="sub">AWS</p>
        </div>
        </div>
      </div>
    </div>
   );
}

export default Skills;
