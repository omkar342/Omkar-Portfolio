import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Card from "./Card";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import About from './components/About'
// import { Route } from "react-router";
// import Particles from 'react-particles-js'
// import Button from '@mui/material/Button';
// import { AppBar } from '@mui/material';
// import { ComponentName } from 'primereact/{componentname}';
// import { Dialog } from 'primereact/dialog';
// import { Accordion,AccordionTab } from 'primereact/accordion';

const App = () => {
  return (
    <div>
      <div className="App">
      <div className="particles">
        <ParticleBackground/>
      </div>
      <Navbar />
      <Home/>
      <Card/>
      <Footer/>
      {/* <Card1/> */}
      {/* <Card2/> */}
      {/* <Route path="/About">
                <About/>
            </Route> */}
    </div>
    </div>
  );
};

export default App;
