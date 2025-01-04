import './style.css';
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Education from './components/Education.jsx';
import Portfolio from './components/Portfolio.jsx'
import Quests from './components/Quests.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import Experience from './components/Animation.jsx'

const App = () => {

    const [active, setActive] = useState('About');

    const renderSection = () => {
        switch (active) {
          case 'About':
            return (
              <>
              <About />
              <Canvas
              camera={{
                  fov: 45,
                  near: 0.1,
                  far: 1000,
                  position: [0, 0, 5]
              }}
              style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  zIndex: -1,
              }}
          >
              <Experience />
          </Canvas>
          </>
          );
          case 'Education':
            return <Education />;
          case 'Work':
            return <Work />;
          case 'Portfolio':
            return <Portfolio />;
          case 'Quests':
            return <Quests />;
          default:
            return <About />;
        }
      };

      return (
        <>
            <BrowserRouter>
                <Navbar setActive={setActive}/>
                <div className="container">
                    {renderSection()}
                </div>
            </BrowserRouter>
    
        </>
      );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);