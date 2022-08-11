import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavHome from './NavHome';
import NavLandingResponsiveMenu from './NavLandingResponsiveMenu';
import HeaderSticky from './HeaderSticky';

const HeaderLandingPage = ( { styles, disableSticky, buttonStyle } ) => {
    const [offcanvasShow, setOffcanvasShow] = useState( false );
    const onCanvasHandler = () => {
        setOffcanvasShow( prevState => ! prevState );
    }



    const sticky = HeaderSticky( 200 );
    const classes = `header-default ${ sticky ? 'sticky' : '' }`;
    const stickyStatus = disableSticky ? '' : ' header-sticky';



    return (
        <>
            <header className={`landing-header home-header ${ stickyStatus } ${ styles || '' } ${ classes || '' }`} >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-xl-3 col-md-6 col-6">
                            <div className="logo">
                                <Link to={ "/"}>
                                    <img className="logo-light" src="/images/logo/ing-light.png" alt="Main Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 d-none d-xl-block">
                            <nav className="mainmenu-nav d-none d-lg-block">
                                
                          
                                <NavHome />
                            </nav>
                        </div>
                        <div className="col-lg-8 col-xl-3 col-md-6 col-6">
                            <div className="header-right d-flex justify-content-end">
                                <div className="header-menu-bar">
                                    
                                    <div className="quote-icon quote-user d-none d-md-block ml--15 ml_sm--5">
                                        <a className="test-btn btn-medium header-button purchase-button"  target="_blank" style={{ borderWidth: '5px', borderStyle: 'solid' }}>
                                            Espace Client
                                        </a>
                                    </div>
                                </div>
                                <div className="mobile-menu-bar ml--15 ml_sm--5 d-block d-xl-none">
                                    <div className="hamberger">
                                        <button className="white-box-icon hamberger-button header-menu"  onClick={ onCanvasHandler }>
                                            <i className="ri-menu-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <NavLandingResponsiveMenu 
                show={ offcanvasShow } 
                onClose={ onCanvasHandler }  
            />
        </>
    )
}

export default HeaderLandingPage;