import React from 'react';
import { Link } from 'react-scroll';

const NavHome = () => {
    return (
        <ul className="mainmenu">
            <li>
                <Link
                    className="landing-nav-btn"
                    to="client"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    Etre client
                </Link>
            </li>
            <li>
                <Link
                    className="landing-nav-btn"
                    to="projets"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    Vos projets
                </Link>
            </li>
            <li>
                <Link
                    className="landing-nav-btn"
                    to="faq"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    Besoin d'aide
                </Link>
            </li>
        </ul>
    )
}

export default NavHome;