import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

// Styles
import styles from "../styles/Navbar/Navbar.module.scss";


const SharedNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const hamburgerHandler = () => {
        setIsOpen(isOpen => !isOpen);
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };


    return (
        <div>
            <header className={`${styles.navbarWrapper} context-wrapper bottom-divider`}>
                <nav>

                    <ul className={`${styles.navbarLinks} ${isOpen ? styles.navbarLinksActive : ""}`}>
                        <i className={`fas fa-close`} onClick={() => setIsOpen(isOpen => false)}></i>
                        <li onClick={scrollToTop}><Link to='/' onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li onClick={scrollToTop}><Link to='/loraPage' onClick={() => setIsOpen(false)}>LoRa</Link></li>
                        <li onClick={scrollToTop}><Link to='/bachelorPage' onClick={() => setIsOpen(false)}>Bachelor Thesis</Link></li>
                    </ul>
                </nav>

                <div className={styles.navbarButtons}>
                    <div onClick={hamburgerHandler} className={styles.hamburgerButton}>
                        <div className={styles.stickWrapper}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>

            <Outlet />
        </div>
    );
}
 
export default SharedNavbar;