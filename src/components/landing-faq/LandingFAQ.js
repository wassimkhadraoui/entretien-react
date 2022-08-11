import React, { useState, useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Link } from 'react-router-dom';

import AccordionContext from 'react-bootstrap/AccordionContext';

const accordionItems = [
    {
        id: 1,
        title: 'Loreim Loreim',
        body: '<p>Looking for an elegant React template to build your education website that won’t burden your budget? <strong>"Lorieum - Online Learning React Education Template"</strong> is the best way to get started with wonderful animations, creative design patterns, and code that is perfectly responsive and powered by Bootstrap 5. This React template includes 05 different homepage demos that are easy to customize. Currently we\'re working on 3 other homepages. There are 45+ inner pages & tons of designed blocks which are ready to use in every conceivable educational institution.</p>'
    },
    {
        id: 2,
        title: 'How to open a ticket and get customer support?',
        body: '<p>If you already bought <strong>"Loreium"</strong> then you can open a support ticket at <strong><a href="" target="_blank">devsvibe.freshdesk.com</a></strong> or you can simply send us an email at <strong><a " target="_blank">contact@devsvibe.com</a></strong> along with the purchase code. To find the purchase code please follow this <strong><a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-" target="_blank">link</a></strong>. Our support engineers will reply to you within 10 minutes to 8 hours(max).</p>'
    },
    {
        id: 3,
        title: 'I\'ve few presale questions?',
        body: '<p>Sure, you can simply send us an email at <strong><a href="mailto:contact@.com" target="_blank">contact@devsvibe.com</a></strong> or you can send us a message at <strong><a " target="_blank">Facebook Messenger</a></strong>.</p>'
    }
];

const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton( eventKey );
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={decoratedOnClick} aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{children}</button>
}

const LandingFAQ = () => {
    const [activeId, setActiveId] = useState( '0' );
    function toggleActive( id ) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }
    return (
        <>
        
        <div className=" projets-style-1 edu-section-gap ">
       
    </div>
        <Element
            name="faq"
            className="landing-faq-wrapper edu-accordion-area accordion-shape-1 edu-section-gap bg-color-white"
        >
      
            <div className="container Loreiumbe-animated-shape">
                <div className="row">
                    <h1>What is Lorem Ipsum?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="read-more-btn">
                                            <div className="video-btn-wrapper" >
                                                <button  className="video-play-btn with-animation video-popup-activation">
                                                    <span className="play-icon"></span>
                                                </button>
                                                <span className="video-text">Gérer au quatidien</span>
                                                <div style={{position: 'relative' ,left: 600, top:-50 }}>
                                                <button  className="video-play-btn with-animation video-popup-activation" >
                                                    <span className="play-icon"></span>
                                                </button>
                                                <span className="video-text">Investir</span>
                                                </div>
                                            </div>
                                            <div className="video-btn-wrapper" >
                                                <button  className="video-play-btn with-animation video-popup-activation">
                                                    <span className="play-icon"></span>
                                                </button>
                                                <span className="video-text">Gérer au quatidien</span>
                                                <div style={{position: 'relative' ,left: 600, top:-50 }}>
                                                <button  className="video-play-btn with-animation video-popup-activation" >
                                                    <span className="play-icon"></span>
                                                </button>
                                                <span className="video-text">Investir</span>
                                                </div>
                                            </div>
                                         
                                        </div>
                    <div className="col-lg-12">

                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" className="pre-section-title text-center" animateOnce={ true }>
                            <span className="color-primary pretitle">Faq question</span>
                            <h3 className="title">Have Any Questions?</h3>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    <div className="col-xl-8 offset-xl-2">
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={ true }
                        >
                            <Accordion bsPrefix="landing-demo-faq edu-accordion-02 variation-2 landing-page-accordion" defaultActiveKey="0" flush>
                                {
                                    accordionItems.map( ( accordion, i ) => (
                                        <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive(i.toString())} bsPrefix={`edu-accordion-item ${activeId === i.toString() ? 'bg-active' : ''}`}>
                                            <div className="edu-accordion-header">
                                                <CustomToggle eventKey={ i.toString() }>{ accordion.title }</CustomToggle>
                                            </div>
                                            {/* <Accordion.Body bsPrefix="edu-accordion-body">{ accordion.body }</Accordion.Body> */}
                                            <Accordion.Body bsPrefix="edu-accordion-body"><div dangerouslySetInnerHTML={{__html: accordion.body}}></div></Accordion.Body>
                                        </Accordion.Item>
                                    ) )
                                }
                            </Accordion>
                        </ScrollAnimation>
                     
                    </div>
             
                </div>

            
            </div>
        </Element>
        <div className="quote-icon quote-user d-none d-md-block ml--15 ml_sm--5">
                                        <a className="test-btn2 "  target="_blank" >
                                            D'autres questions
                                        </a>
                                    </div>
        </>
    )
}

export default LandingFAQ;