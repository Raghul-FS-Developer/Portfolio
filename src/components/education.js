import React, {useContext} from "react";
import "./education.css";
import { ThemeContext } from './context'
function Education() {
  const theme=useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
      <div className="e1">
        <h1 className="e1-title">Education</h1>
        <p className="e1-disc">Qualification</p>

        <section class="timeline-wrapper">
          <div class="middle-line"></div>

          <div class="box box-bottom">
            <div class="date" style={{backgroundColor:darkMode ? "#222" : ""}}>
              <p style={{paddingTop:'7px'}}>2017</p>
            </div>
            <div class="box-content">
              <p>
                <h2>SSLC</h2>Bharathi Mat.Hr.Sec.School{" "}
                <span className="small">Bhuvanagiri,TamilNadu</span>
              </p>
            </div>
          </div>

          <div class="box box-top">
            <div class="date" style={{backgroundColor:darkMode ? "#222" : ""}}>
              <p style={{paddingTop:'7px'}}>2019</p>
              {/* <p>AUG</p> */}
            </div>
            <div class="box-content">
              <p>
                <h2>HSC</h2>Bharathi Mat.Hr.Sec.School{" "}
                <span className="small">Bhuvanagiri,TamilNadu</span>
              </p>
            </div>
          </div>
          <div class="box box-bottom">
            <div class="date" style={{backgroundColor:darkMode ? "#222" : ""}}>
              <p className="small-date">2019-2022</p>
            </div>
            <div class="box-content">
              <p>
                <h2>BCA</h2>
                <span className="small">Bachelor Of Computer Application</span>
                <br />
                vels institute of science technology & advanced studies(VISTAS)
                <span className="small">
                  <br />
                  pallavaram,chennai
                </span>
              </p>
            </div>
          </div>
          <div class="box box-top">
            <div class="date" style={{backgroundColor:darkMode ? "#222" : ""}}>
              <p className="small-date">
                2022 <span className="small">Present</span>
              </p>
            </div>
            <div class="box-content">
              <p>
                <h3>Full Stack Developer</h3>
                <span className="small2">
                  GUVI Geek Networks, IITM Research Park, Chennai,Tamilnadu
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Education;
