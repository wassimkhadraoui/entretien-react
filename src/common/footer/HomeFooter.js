import React from 'react';
import { Link as ScrollTo } from 'react-scroll';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
    return (
        <>
            <footer className="pv-footer edu-section-gap">
            <div className="footer-top">
                    <div className="container eduvibe-animated-shape">
                        <div className="row g-5">
                  

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget explore-widget">
                                    <h5 className="widget-title">ING France</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link to="/">About Us</Link></li>
                                            <li><Link to="/">Notre actualité</Link></li>
                                            <li><Link to="/">Nous rejoindre</Link></li>
                                            </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget quick-link-widget">
                                    <h5 className="widget-title">Accès rapide</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link to="/">
                                                Espace Client</Link></li>
                                            <li><Link to="/pricing">Tarifs et modalités</Link></li>
                                            <li><Link to="/instructor-details/james-carlson"> Instructor Profile</Link></li>
                                            <li><Link to="/purchase-guide"> Purchase Guide</Link></li>
                                            <li><Link to="/course-1"> Popular Courses</Link></li>
                                            <li><Link to="/event-details/1"> Event Details</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="edu-footer-widget">
                                <h5 className="widget-title">Explore</h5>

                                    <ul className="social-share">
                                        <li><a href="#"><i className="icon-Fb"></i></a></li>
                                        <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                        <li><a href="#"><i className="icon-Pinterest"></i></a></li>
                                        <li><a href="#"><i className="icon-Twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget">
                                    <h5 className="widget-title">Contact Info</h5>
                                    <div className="inner">
                                        <div className="widget-information">
                                            <ul className="information-list">
                                                <li><img className="logo-light" src="/images/logo/logo-apple.svg" alt="Main Logo" />
                                                </li>
                                                <li><img className="logo-light" src="/images/logo/Logo-google-play.svg" alt="Main Logo" /></li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area copyright-default">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                               
                                   <p style={{ color: 'black'}}>Sécurité  <Link to={process.env.PUBLIC_URL + "/"}/> |  Sécurité  <Link to={process.env.PUBLIC_URL + "/"}/></p>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default HomeFooter;