import React from 'react';
import '../styles/support.css';
import { HiSupport } from 'react-icons/hi';
import { HiCpuChip } from 'react-icons/hi2';
import { FiPhone } from 'react-icons/fi';
import { BsArrowRightShort } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import support from '../images/support.jpg';

const Support = (props) => {
    return (
        <div className="Support" ref={props.support}>
            <img src={support} className="bg"/>
            <div className="support_cont">
                <Flip right>
                    <div className="support">SUPPORT</div>
                    <div className="support_title">Finding the right team</div>
                    <div className="support_desc">Lorem ipsum dolor sit amet consecteur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</div>
                </Flip>
            </div>
            <div className="support_boxs1">
                <div className="support_boxs2">
                    <Fade top>
                        <div className="support_box">
                            <div className="support_icon">
                                <FiPhone />
                            </div>
                            <div className="support_box_title">Sales</div>
                            <div className="support_box_desc">
                            Lorem ipsum dolor, sit amet consecteur adipisicing elit. Corrupti id asperiores at, quia invwntore repellendus ut faciis eligendi libero quibudsam?
                            </div>
                            <div className="support_contact">
                                Contact Us
                                <BsArrowRightShort className="iconarrow" />
                                </div>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="support_box">
                            <div className="support_icon">
                                <HiSupport />
                            </div>
                            <div className="support_box_title">Technical Support</div>
                            <div className="support_box_desc">
                            Lorem ipsum dolor, sit amet consecteur adipisicing elit. Corrupti id asperiores at, quia invwntore repellendus ut faciis eligendi libero quibudsam?
                            </div>
                            <div className="support_contact">
                                Contact Us
                                <BsArrowRightShort className="iconarrow" />
                                </div>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="support_box">
                            <div className="support_icon">
                                <HiCpuChip />
                            </div>
                            <div className="support_box_title">Media Inquiries</div>
                            <div className="support_box_desc">
                            Lorem ipsum dolor, sit amet consecteur adipisicing elit. Corrupti id asperiores at, quia invwntore repellendus ut faciis eligendi libero quibudsam?
                            </div>
                            <div className="support_contact">
                                Contact Us
                                <BsArrowRightShort className="iconarrow" />
                                </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Support;
