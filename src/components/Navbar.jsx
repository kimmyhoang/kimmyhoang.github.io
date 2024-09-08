import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';

export default function Navbar()
{
    return <>
        <nav>
            <ul>
                <li>
                    <Link to="#about" className="link">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="#education" className="link">
                        Education
                    </Link>
                </li>
                {/* <li>
                    <Link to="#projects" className="link">
                        Projects
                    </Link>
                </li> */}
                {/* <li>
                    <Link to="#misc" className="link">
                        Miscellaneous
                    </Link>
                </li> */}
            </ul>
        </nav>
    </>
}