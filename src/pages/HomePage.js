import React from 'react';
import HeaderLandingPage from '../common/header/HeaderLandingPage';
import LandingFAQ from '../components/landing-faq/LandingFAQ';
import LandingFooter from '../common/footer/HomeFooter';
import { Link as ScrollTo } from 'react-scroll';
import { Element } from 'react-scroll';
const LandingDemo = () => {
    return (
        <>

            <HeaderLandingPage styles="header-transparent" />

            <Element
            name="cleint"
            className="slider-area home-landing-banner bg-image"
        >
            <div className="d-flex align-items-center height-800">
                <div className="container eduvibe-animated-shape">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                        <div className="banner-image">
                                <div className="banner-main-image">
                                    <img className="landing-banner-hero-img" src="/images/logo/hp_referral_visuelshowcase.webp" alt="Tablet & Mobile View" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="inner">
                                <div className="content text-start">
                                    <h1 className="title">Where does it come from?</h1>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                    <div className="btn-group-vertical">
                                        <ScrollTo
                                            className="test-btn bg-white right-button"
                                            to="projets"
                                            spy={true}
                                            smooth={true}
                                            duration={200}
                                        >
                                            eventuellien <i className="icon-arrow-right-line-right"></i>
                                        </ScrollTo>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Element>
            
            <LandingFAQ />
            
            <LandingFooter />
        </>
    )
}

export default LandingDemo;