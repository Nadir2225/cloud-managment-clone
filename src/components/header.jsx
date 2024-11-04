
import '../styles/header.css';

const Header = (props) => {


    return (
        <div className="Header">
            <div className={props.navbar ? "sidebar" : "header"}>
                <div className="topside" >
                    <div className="left_header">
                        <div className="brand">Brand.</div>
                        <div className="sections">
                            <div className="sec" onClick={() => props.scrollDown(props.home)}>Home</div>
                            <div className="sec" onClick={() => props.scrollDown(props.about)}>About</div>
                            <div className="sec" onClick={() => props.scrollDown(props.support)}>Support</div>
                            <div className="sec" onClick={() => props.scrollDown(props.platforms)}>Platforms</div>
                            <div className="sec" onClick={() => props.scrollDown(props.pricing)}>Pricing</div>
                        </div>
                    </div>
                    <div className="right_header">
                        <div className="signin">Sign in</div>
                        <div className="signup">Sign up</div>
                    </div>
                    <div className={props.navbar ? "burger open" : "burger"} onClick={() => props.setNavbar(!props.navbar)}>
                        <div className="burger_btn"></div>
                    </div>
                </div>
                
                <div className="navbar">
                    <div className="secs" onClick={() => props.scrollDown(props.home)}>
                        Home
                        <div className="line"></div>
                    </div>
                    <div className="secs" onClick={() => props.scrollDown(props.about)}>
                        About
                        <div className="line"></div>
                    </div>
                    <div className="secs" onClick={() => props.scrollDown(props.support)}>
                        Support
                        <div className="line"></div>
                    </div>
                    <div className="secs" onClick={() => props.scrollDown(props.platforms)}>
                        Platform
                        <div className="line"></div>
                    </div>
                    <div className="secs" onClick={() => props.scrollDown(props.pricing)}>
                        Pricing
                        <div className="line"></div>
                    </div>
                    <div className="sign">
                        <div className="inbtn">Sign in</div>
                        <div className="upbtn">Sign up</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header;