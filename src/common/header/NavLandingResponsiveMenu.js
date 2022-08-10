import React from 'react';
import { Link } from 'react-router-dom';
import NavLandingDemo from './NavHome';

const NavLandingResponsiveMenu = ( { show, onClose, showSearch, onSearch } ) => {


  

    return (
        <>
            <div className={ `popup-mobile-menu ${ show ? 'active': ''}` }>
                <div className="inner">
                    <div className="header-top">
                        <div className="logo">
                            <Link to={process.env.PUBLIC_URL + '/' }>
                                <img src="/images/logo/ing-light.png" alt="Main Logo" />
                            </Link>
                        </div>
                        <div className="close-menu">
                            <button className="close-button" onClick={ onClose }>
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    </div>
                    <NavLandingDemo />
                </div>
            </div>

        </>
    )
}

export default NavLandingResponsiveMenu;