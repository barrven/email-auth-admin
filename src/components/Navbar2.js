import { useState } from 'react';
import s from '@/styles/Navbar2.module.css'; // Add a new module CSS file for the navbar
import { useRouter } from 'next/router';
import { useEffect, useRef } from "react";

const Navbar = () => {

    const navRef = useRef(null);
    const sidebarOpenRef = useRef(null);

    useEffect(() => {
        // Add the event listener when the component mounts
        document.body.addEventListener("click", handleClick);

        // Clean up the event listener when the component unmounts
        return () => {
            document.body.removeEventListener("click", handleClick);
        };
    }, []);

    const handleClick = (e) => {
        const clickedElm = e.target;

        if (
            !clickedElm.classList.contains("sidebarOpen") &&
            !clickedElm.classList.contains("menu")
        ) {
            navRef.current?.classList.remove("active");
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav ref={navRef}>
            <div className={s.navBar}>
                <i className={`${s.sidebarOpen} bx bx-menu`} ref={sidebarOpenRef}></i>
                <span className={`${s.logo} ${s.navLogo}`}>
                    <a href="#">
                        {/* <img class="logo" src="bslogo.png"></img> */}
                    </a>
                </span>

                <div className={s.menu}>
                    <div className={s.logoToggle}>
                        <span className={s.logo}>
                            <a href="#">
                                {/* <img class="logo" src="bslogo.png"></img> */}
                            </a>
                        </span>
                        <i className={`${s.siderbarClose} bx bx-x`}></i>
                    </div>

                    <ul className={s.navLinks}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
