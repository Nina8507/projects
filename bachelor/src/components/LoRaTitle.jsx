import React from 'react';

// Styles
import styles from "../styles/LoRaPage/LoRaPage.module.scss";
import homeStyles from "../styles/HomePage/HomePageTitle.module.scss";

import green from "../assets/projects_img/green.webp";

const LoRaTitle = () => {
    return (
        <div className={`${homeStyles.aboutHero} context-wrapper bottom-divider-large`}>
            <div className={homeStyles.heroImages}>
                <img className={homeStyles.laptopImage} src={green} alt="" />
            </div>
            <br />
            <br />
            <h2 className={`${styles.heroTitle} title-second`}>Automated system through the use of wireless sensors connected to the IoT</h2>
            <br/>
            <p className={`${styles.heroText} text-main bottom-divider`}>The system makes use of a microcontroller connected to a Loriot server by a LoRaWan antenna, communicating through a Web Socket API connection to a gateway serverapplication. The server application is designed in a Spring Boot framework such that it supports a RESTful architecture with the Android client. Data analysis was done following the dimensional modelling process using Microsoft SQL Server as a tool to handle the ETL system development. The data visualisation was created using Microsoft PowerBI.</p>
            <p className={`${styles.heroText} text-main bottom-divider`}>The result is a software with an architecture which allows the user to add multiple devices to the greenhouse, set and reset target and threshold values to the sensors, have periodic measurement reading for each sensor and an overview of the recorder measurements over a period. For the data analyst, the recorded data is displayed in an interactive dashboard. To maintain the performance of the systems, test were conducted.</p>
        </div>
    );
}
 
export default LoRaTitle;