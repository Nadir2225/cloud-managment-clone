import React from 'react';
import '../styles/footer.css';
import { BsFacebook , BsInstagram , BsTwitch , BsTwitter , BsGithub } from 'react-icons/bs';

const Footer = (props) => {
    return (
        <div className="Footer" >
            <div className="footer">
                <div className="footer_top">
                    <div className="solutions">
                        <div className="solutions1">
                            <div className="solution first">
                                <div className="solution_title">SOLUTIONS</div>
                                <div className="solution_list">
                                    <div className="list_element">Marketing</div>
                                    <div className="list_element">Analytics</div>
                                    <div className="list_element">Commerce</div>
                                    <div className="list_element">Data</div>
                                    <div className="list_element">Cloud</div>
                                </div>
                            </div>
                            <div className="solution">
                                <div className="solution_title">SUPPORT</div>
                                <div className="solution_list">
                                    <div className="list_element">Pricing</div>
                                    <div className="list_element">Docu</div>
                                    <div className="list_element">Guides</div>
                                    <div className="list_element">API Status</div>
                                </div>
                            </div>
                        </div>
                        <div className="solutions2">
                            <div className="solution">
                                <div className="solution_title">COMPANY</div>
                                <div className="solution_list">
                                    <div className="list_element">About</div>
                                    <div className="list_element">Blog</div>
                                    <div className="list_element">Jobs</div>
                                    <div className="list_element">Press</div>
                                    <div className="list_element">Partners</div>
                                </div>
                            </div>
                            <div className="solution last">
                                <div className="solution_title">LEGAL</div>
                                <div className="solution_list">
                                    <div className="list_element">Clain</div>
                                    <div className="list_element">Privact</div>
                                    <div className="list_element">Policies</div>
                                    <div className="list_element">Terms</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subscribtion">
                        <div className="solution_title">SUBSCRIBE TO OUR NEWSLETTER</div>
                        <div className="subscribtion_desc">Thee latest news, articles,and resources, sent to your inbox weekly.</div>
                        <div className="inputs">
                            <input type="text" className="email" placeholder="Enter your email"/>
                            <div className="subscribe_btn">Subscribe</div>
                        </div>
                    </div>
                </div>
                <div className="footer_line"></div>
                <div className="footer_bottom">
                    <div className="llc">2022 Workflow,LLC. All rights reserved.</div>
                    <div className="social_media">
                        <BsFacebook className="social_icons"/>
                        <BsInstagram className="social_icons"/>
                        <BsTwitter className="social_icons"/>
                        <BsTwitch className="social_icons"/>
                        <BsGithub className="social_icons"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
