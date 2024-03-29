import React from 'react';

// Styles
import styles from "../styles/HomePage/HomePageTitle.module.scss";

// Images
import lora from "../assets/projects_img/code_guide.jpg";
import wms from "../assets/projects_img/java_small.webp";

const HomePageHero = () => {
    return (
      <div className='context-wrapper bottom-divider'>
        <h1 className={`${styles.heroTitle} title-main`}>Software Projects</h1>
        <p className={`${styles.heroText} text-main`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
        <br />
        <p className={`${styles.heroText} text-main`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>

        <div className={styles.heroImages}>
          <img className={styles.laptopImage} src={lora} alt="" />
          <img className={styles.phoneImage} src={wms} alt="" />
        </div>
      </div>
    );
}
 
export default HomePageHero;