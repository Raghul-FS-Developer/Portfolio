import { useContext } from 'react';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import { ThemeContext } from './components/context';
import Education from './components/education';
import Interest from './components/interest';
import Intro from './components/intro';
import Project from './components/project';
import Skills from './components/skills';
import Toggle from './components/toggle';

function App() {

 const theme = useContext(ThemeContext);
 const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? '#222': 'white',
                  color: darkMode && "white"}}>
      <Toggle/>
      <Intro />
      <About/>
      <Skills/>
      <Project/>
      <Education/>
      <Interest/>
      <Contact/> 
    </div>
  );
}

export default App;
