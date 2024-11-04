import React from 'react';
import '../styles/about.css';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const About = (props) => {
    return (
        <div className="About" ref={props.about}>
            <Flip left>
                <div className="about_title">Trusted by developers across the world</div>
                <div className="about_desc">Lorem ipsum dolor sit amet consecteur,adipisicing elit. Cumque earum placeat veritatis dignissimos istaque.</div>
            </Flip>
            <div className="about_boxs">
                <Fade left>
                    <div className="about_box">
                        <div className="about_num">100%</div>
                        Completion
                    </div>
                </Fade>
                <Fade right>
                    <div className="about_box">
                        <div className="about_num">24/7</div>
                        Delivery
                    </div>
                </Fade>
                <Fade left>
                    <div className="about_box">
                        <div className="about_num">100K</div>
                        Transactions
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default About;
