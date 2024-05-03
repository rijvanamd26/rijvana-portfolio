import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CodingProfiles from './components/Coding_profiles';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CodingProfiles/>
      <Contact />
      
      {/* Fixed icons container */}
      <div className="fixedIconsContainer" >
        {/* GitHub */}
        <a href="https://github.com/yourusername" className="fixedIcon">
          <FontAwesomeIcon icon={faGithub} size="lg" color='turquoise' style={{fontSize:'1.5rem'}} />
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/yourprofile" className="fixedIcon">
          <FontAwesomeIcon icon={faLinkedin} size="lg" color='turquoise' style={{fontSize:'1.5rem'}} />
        </a>
        {/* Email */}
        <a href="mailto:youremail@example.com" className="fixedIcon">
          <FontAwesomeIcon icon={faEnvelope} size="lg" color='turquoise' style={{fontSize:'1.5rem'}}  />
        </a>
        {/* Phone */}
        <a href="tel:+1234567890" className="fixedIcon">
          <FontAwesomeIcon icon={faPhone} size="lg" color='turquoise' style={{fontSize:'1.5rem'}}/>
        </a>
        {/* Vertical line */}
        <div className="verticalLine" ></div>
      </div>
    </div>
  );
}

export default App;
