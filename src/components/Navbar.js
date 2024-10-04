import { useState } from 'react';
import styles from '@/styles/Navbar.module.css'; // Add a new module CSS file for the navbar
// import { useRouter } from 'next/router';
import MenuIcon from '@/components/MenuIcon';
import { useUser } from '@/services/UserContext';

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    // const router = useRouter();
    const user = useUser();
    console.log(user)

    return (
        <div>
            <nav>
                
                <div className={styles.navbar}>
                    {/* This part should stay on top */}
                    <div className={styles.logo}>
                        <a href='/'>
                            <img src='bslogo.png' width='40px'></img>
                        </a>
                    </div>

                    <div>{user && user.email}</div>

                    <MenuIcon 
                        contStyle={styles.hamburger}
                        barStyle={styles.bar}
                        onClick={()=> setIsOpen(!isOpen)}
                    />

                </div>

                {/* Nav drawer / menu items */}
                <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                    <a href="/">Home</a>
                    <a href="/form">Send Email</a>
                    <a href="/sign-in">Sign in</a>
                </div>

            </nav>

            <div className={`${styles.spacer} ${isOpen ? styles.open : ''}`}></div>
        </div>
    );
};

export default Navbar;
