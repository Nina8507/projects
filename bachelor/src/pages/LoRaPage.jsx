import React from 'react';

// Styles
import styles from "../styles/LoRaPage/LoRaPage.module.scss";

// Components
import LoRaTitle from "../components/LoRaTitle";
import LoRaDescription from "../components/LoRaDescription";
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