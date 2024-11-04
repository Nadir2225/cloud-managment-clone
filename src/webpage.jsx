import React, { useState , useRef } from 'react';
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Support from './components/support';
import Platforms from './components/platforms';
import Pricing from './components/pricing';
import Footer from './components/footer';

const Webpage = () => {
    const about = useRef(null)
    const home = useRef(null)
    const support = useRef(null)
    const pricing = useRef(null)
    const platforms = useRef(null)

    const [navbar, setNavbar] = useState(false)

    const scrollDown = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 60,
            behavior: 'smooth',
        });
        if (navbar) {
            setNavbar(false)
        }else {
            return
        }
    }

    return (
        <div>
            <Header 
            navbar={navbar}
            setNavbar={setNavbar}
            scrollDown={scrollDown}
            pricing={pricing}
            home={home}
            about={about}
            support={support}
            platforms={platforms}
            />
            <Home
            home={home}
            />
            <About
            about={about}
            />
            <Support
            support={support}
            />
            <Platforms
            platforms={platforms}
            />
            <Pricing
            pricing={pricing}
            />
            <Footer />
        </div>
    )
}

export default Webpage
