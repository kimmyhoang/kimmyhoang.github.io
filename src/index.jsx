import './style.css';
import ReactDOM from 'react-dom/client';
import About from './components/About.jsx';
import Communities from './components/Experiences.jsx';
import Education from './components/Education.jsx';
import Miscellaneous from './components/Misc.jsx';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';

import { Canvas } from '@react-three/fiber'
import Experience from './components/Animation.jsx'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <BrowserRouter>
            <Navbar />
            <About />
            <Education />
            {/* <Communities /> */}
            {/* <Projects /> */}
            {/* <Miscellaneous /> */}
            <Canvas>
                <Experience />
            </Canvas>
        </BrowserRouter>

    </>
)