import React from 'react';
// Styles
import styles from "../styles/Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footerBackground}>
            <div className={`${styles.footerContext} context-wrapper`}>

                <section className={styles.footerBottom}>
                    <p>COPYRIGHT &copy; 2023 | Constantina Tripon</p>
                </section>
            </div>
        </div>
    );
}
 
export default Footer;