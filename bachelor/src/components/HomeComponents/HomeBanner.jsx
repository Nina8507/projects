import React from 'react';

// Styles
import styles from "../../styles/HomePage/HomePageTitle.module.scss";

// Images
import lora from "../../assets/projects_img/code_guide.jpg";
import wms from "../../assets/projects_img/java_small.webp";

const HomePageHero = () => {
    return (
      <div className='context-wrapper bottom-divider'>
        <h1 className={`${styles.heroTitle} title-main`}>Software Projects</h1>
        <p className={`${styles.heroText} text-main`}>A multi-page application designed to provide detailed descriptions of the software projects I have developed or have been a part of the development team.</p>
        <br />
        <p className={`${styles.heroText} text-main`}>An overview of the architectural design, language and frameworks used, complete with a short background description for each project, will help enhance the understanding of the system. </p>

        <div className={styles.heroImages}>
          <img className={styles.laptopImage} src={lora} alt="" />
          <img className={styles.phoneImage} src={wms} alt="" />
        </div>
      </div>
    );
}
 
export default HomePageHero;