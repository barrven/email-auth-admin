import { useState } from 'react';
import styles from '@/styles/Navbar.module.css'; // Add a new module CSS file for the navbar
import { useRouter } from 'next/router';

const Navbar = ({ user }) => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <a href='/'>
                        <img src='bslogo.png' width='40px'></img>
                    </a>
                </div>
                <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                    <a href="/">Home</a>
                    <a href="/form">Send Email</a>
                    <a href="/">Services</a>
                    <a href="/">Contact</a>
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
                
            </nav>
            <div className={`${styles.spacer} ${isOpen ? styles.open : ''}`}></div>
        </div>
    );
};

export default Navbar;
