import React from 'react';

// Styles
import styles from "../styles/LoRaPage/LoRaPage.module.scss";

// Components
import LoRaTitle from "../components/LoRaComponents/LoRaTitle";
import LoRaDescription from "../components/LoRaComponents/LoRaDescription";
import Footer from "../components/Footer";



const AboutPage = () => {
  return (
    <div className={`${styles.loraPage}`}>
      <LoRaTitle />
      <LoRaDescription />
      <Footer /> 
    </div>
    );
}
 
export default AboutPage;