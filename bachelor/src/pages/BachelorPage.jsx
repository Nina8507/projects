import React from 'react';

// Styles
import styles from "../styles/LoRaPage/LoRaPage.module.scss";

// Components
import BachelorTitle from "../components/BachelorTitle";
import BachelorDescription from "../components/BachelorDescription";
import Footer from "../components/Footer";



const BachelorPage = () => {
  return (
    <div className={`${styles.bachelorPage}`}>
      <BachelorTitle />
      <BachelorDescription />
      <Footer /> 
    </div>
    );
}
 
export default BachelorPage;