import './work.css'
import { ThemeContext } from '../components/context';
import { useContext } from 'react';
import {AiFillGithub} from "react-icons/ai"
import {FaRegLightbulb} from "react-icons/fa"

const Work = ({img,link,gitf,gitb,disc,gits}) => {

  const theme = useContext(ThemeContext);
 const darkMode = theme.state.darkMode;

    return (
     <>
      <div className="p" style={{borderColor:darkMode? "#777": ""}}>
        <div className="p-browser" style={{backgroundColor:darkMode? "#555": ""}}>
          <div className='circle'>
          <div className="p-circle" style={{backgroundColor:darkMode? "whitesmoke": ""}}></div>
          <div className="p-circle" style={{backgroundColor:darkMode? "whitesmoke": ""}}></div>
          <div className="p-circle" style={{backgroundColor:darkMode? "whitesmoke": ""}}></div>
          </div>
          
          <div>
          <a className='tooltip'href={gitf} target="_blank" rel="noreferrer" style={{color:darkMode? "whitesmoke": ""}} ><AiFillGithub />
          <span class="tooltiptext">Github-Client</span>
          </a> 
          {gitb && (<a className='tooltip'href={gitb} target="_blank" rel="noreferrer" style={{color:darkMode? "whitesmoke": ""}}><AiFillGithub/>
          <span class="tooltiptext">Github-Server</span>
          </a>)}
          {gits && (<a className='tooltip'href={gits} target="_blank"  rel="noreferrer" style={{color:darkMode? "whitesmoke": ""}}><AiFillGithub/>
          <span class="tooltiptext">Github-Socket</span>
          </a>)}
          <a className='tooltip'href={link} target="_blank"rel="noreferrer" style={{color:darkMode? "whitesmoke": ""}}><FaRegLightbulb size={15}/>
          <span class="tooltiptext">{disc}</span>
          </a> 
          </div>

        </div>
                <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
         
        </a>
        
      </div>
    
      </>
      
    );
  };
  
  export default Work;