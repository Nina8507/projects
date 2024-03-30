import React, { useState } from 'react';

import styles from "../styles/LoRaPage/LoRaPage.module.scss";


const EnlargeableImage = ({ src }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div onClick={toggleEnlarged}>
      {isEnlarged ? (
        <img src={src} style={{ maxWidth: '2000px', height: 'auto', cursor: 'pointer' }} alt='' class="zoom_image"/>
      ) : (
        <img src={src} style={styles.missionTarge} alt=''class="zoom_image"/>
      )}
      {/* Text on hover */}
      {!isEnlarged && (
        <div class="popup">
          <p>ZOOM</p>
        </div>
      )}
    </div>
  );
};

export default EnlargeableImage;