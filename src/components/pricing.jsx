import React from 'react';
import '../styles/pricing.css';
import { IoMdClose } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import Tada from 'react-reveal/Tada';
import Flip from 'react-reveal/Flip';

const Pricing = (props) => {
    return (
        <div className="Pricing" ref={props.pricing}>
            <Flip right>
                <div className="pricing">PRICING</div>
                <div className="pricing_title">The right price for your your research.</div>
                <div className="pricing_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio soluta recusandae praesentium magni reprehenderit voluptatibus.</div>
            </Flip>
            <div className="pricing_boxs1">
                <div className="pricing_boxs2">
                    <div className="pricing_box">
                        <div className="pricing_box_label">
                            <div className="label">
                                STANDARD
                            </div>
                        </div>
                        <div className="pricing_price">
                            <div className="pricing_price_num">$49</div>
                            <div className="per_month">/mo</div>
                        </div>
                        <div className="pricing_box_desc">Lorem ipsum dolor sit amet consevtetur adipisicing elit.</div>
                        <div className="pricing_box_advs">
                            <div className="pricing_box_adv">
                                <MdDone className="adv_left" />
                                <div className="adv_right">Lorem, ipsum dolor.</div>
                            </div>
                            <div className="pricing_box_adv">
                                <IoMdClose className="adv_left close_one" />
                                <div className="adv_right">Lorem ipsum dolor sit amet.</div>
                            </div>
                            <div className="pricing_box_adv">
                                <MdDone className="adv_left" />
                                <div className="adv_right">Lorem ipsum dolor sit</div>
                            </div>
                            <div className="pricing_box_adv">
                                <IoMdClose className="adv_left close_one" />
                                <div className="adv_right">Lorem, ipsum dolor</div>
                            </div>
                        </div>
                        <div className="pricing_box_btn">Get Started</div>
                    </div>
                    <Tada>
                        <div className="pricing_box pricing_box_sec">
                            <div className="pricing_box_label">
                                <div className="label">ENTERPRISE</div>
                            </div>
                            <div className="pricing_price">
                                <div className="pricing_price_num">$89</div>
                                <div className="per_month">/mo</div>
                            </div>
                            <div className="pricing_box_desc">Lorem ipsum dolor sit amet consevtetur adipisicing elit.</div>
                            <div className="pricing_box_advs">
                                <div className="pricing_box_adv">
                                    <MdDone className="adv_left" />
                                    <div className="adv_right">Lorem, ipsum dolor.</div>
                                </div>
                                <div className="pricing_box_adv">
                                    <MdDone className="adv_left" />
                                    <div className="adv_right">Lorem ipsum dolor sit amet.</div>
                                </div>
                                <div className="pricing_box_adv">
                                    <MdDone className="adv_left" />
                                    <div className="adv_right">Lorem ipsum dolor sit</div>
                                </div>
                                <div className="pricing_box_adv">
                                    <MdDone className="adv_left" />
                                    <div className="adv_right">Lorem, ipsum dolor</div>
                                </div>
                            </div>
                            <div className="pricing_box_btn">Get Started</div>
                        </div>
                    </Tada>
                </div>
            </div>
        </div>
    )
}

export default Pricing;