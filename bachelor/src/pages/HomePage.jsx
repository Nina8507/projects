import React from 'react';

// Styles
import styles from "../styles/HomePage/HomePage.module.scss";

import HomePageBanner from '../components/HomeComponents/HomeBanner';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
      <div className={styles.homePage}>
          <HomePageBanner />
          <Footer />
      </div>
  );
}

export default HomePage;