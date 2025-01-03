import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import '../style.css'

const Navbar = ({ setActive }) => {
    return (

        <nav className="navbar">
            <div className="navbar-center">
                <ul className="nav-links">
                <li onClick={() => setActive('About')}>Kim Hoang</li>
                <li onClick={() => setActive('Education')}>Education</li>
                <li onClick={() => setActive('Work')}>Work</li>
                <li onClick={() => setActive('Portfolio')}>Portfolio</li>
                <li onClick={() => setActive('Quests')}>Side Quests</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar