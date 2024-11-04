import React from 'react';
import '../styles/platforms.css';
import { MdDone } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Platforms = (props) => {
    return (
        <div className="Platforms" ref={props.platforms}>
            <Flip left>
                <div className="platforms_title">All-In-One Platform</div>
                <div className="platforms_desc">Lorem ipsum, dolor sit amet consecteur adipising elit. lllo quos eligendi totam mulla. At expedita sit facere tempore accusamus nemo.</div>
            </Flip>
            <div className="notifs1">
                <Fade left>
                    <div className="notif_box">
                        <MdDone className="notif_left" />
                        <div className="notif_right">
                            <div className="notif_title">Notifications</div>
                            <div className="notif_desc">lorem ipsum dolor sit amet consecteur, adipisicing elit. Distinctio minima maxime laboriosam.</div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="notif_box">
                        <MdDone className="notif_left" />
                        <div className="notif_right">
                            <div className="notif_title">Notifications</div>
                            <div className="notif_desc">lorem ipsum dolor sit amet consecteur, adipisicing elit. Distinctio minima maxime laboriosam.</div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="notif_box">
                        <MdDone className="notif_left" />
                        <div className="notif_right">
                            <div className="notif_title">Notifications</div>
                            <div className="notif_desc">lorem ipsum dolor sit amet consecteur, adipisicing elit. Distinctio minima maxime laboriosam.</div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="notif_box">
                        <MdDone className="notif_left" />
                        <div className="notif_right">
                            <div className="notif_title">Notifications</div>
                            <div className="notif_desc">lorem ipsum dolor sit amet consecteur, adipisicing elit. Distinctio minima maxime laboriosam.</div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="notifs2">
                <Fade left>
                    <div className="notif_box">
                        <MdDone className="notif_left" />
                        <div className="notif_right">
                            <div className="notif_title">Notifications</div>
                            <div className="notif_desc">lorem ipsum dolor sit amet consecteur, adipisicing elit. Distinctio minima maxime laboriosam.</div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="notif_box">
                        <MdDone className="notif_left" />
                        <div className="notif_right">
                            <div className="notif_title">Notifications</div>
                            <div className="notif_desc">lorem ipsum dolor sit amet consecteur, adipisicing elit. Distinctio minima maxime laboriosam.</div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="notif_box">
                        <MdDone className="notif_left" />
                        <div className="notif_right">
                            <div className="notif_title">Notifications</div>
                            <div className="notif_desc">lorem ipsum dolor sit amet consecteur, adipisicing elit. Distinctio minima maxime laboriosam.</div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="notif_box">
                        <MdDone className="notif_left" />
                        <div className="notif_right">
                            <div className="notif_title">Notifications</div>
                            <div className="notif_desc">lorem ipsum dolor sit amet consecteur, adipisicing elit. Distinctio minima maxime laboriosam.</div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Platforms;
