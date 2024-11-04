import React from 'react';
import '../styles/home.css';
import { RiDatabase2Fill , RiUploadCloud2Fill } from 'react-icons/ri';
import { IoSend } from 'react-icons/io5';
import { HiServer } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import cyberBg from '../images/cyber-bg.png';


const Home = (props) => {
    return (
        <div className="Home" ref={props.home}>
            <div className="intro_top">
                <div className="intro_title">
                        <div>Unique Sequencing &#38; Production</div>
                    <Fade top cascade>
                        <div className="title1">Cloud</div>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="title2">Management</div>
                    </Fade>
                        <div>This is our tech brand</div>
                        <div className="get_started">Get Started</div>
                </div>
                <img 
                src={cyberBg}
                className="img1"
                />
            </div>
            <div className="intro_bottom">
                <Pulse>
                    <div className="box">
                        <div className="box_title">Data Services</div>
                        <div className="services">
                            <div className="service">
                            <RiDatabase2Fill className="service_icon" />
                                App Security
                            </div>
                            <div className="service">
                            <HiServer className="service_icon" />
                                Dashboard Design
                            </div>
                            <div className="service">
                            <RiUploadCloud2Fill className="service_icon" />
                                Cloud Data
                            </div>
                            <div className="service">
                            <IoSend className="service_icon rotate" />
                                API Services
                            </div>
                        </div>
                        <div className="services1">
                            <div className="services3">
                                <div className="service">
                                <RiDatabase2Fill className="service_icon" />
                                    App Security
                                </div>
                                <div className="service">
                                <RiUploadCloud2Fill className="service_icon" />
                                    Cloud Data
                                </div>
                            </div>
                            <div className="services2">
                                <div className="service">
                                <HiServer className="service_icon" />
                                    Dashboard Design
                                </div>
                                <div className="service">
                                <IoSend className="service_icon rotate" />
                                    API Services
                                </div>
                            </div>
                        </div>
                    </div>
                </Pulse>
            </div>
        </div>
    )
}

export default Home;