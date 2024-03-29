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
        <img src={src} style={styles.missionTarge} alt=''/>
      ) : (
        <img src={src} style={{ maxWidth: '2000px', height: 'auto', cursor: 'pointer' }} alt=''/>
      )}
      {/* Text on hover */}
      {!isEnlarged && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          <p style={{ color: 'white', backgroundColor: 'black', padding: '8px', borderRadius: '4px' }}>
            Click to Zoom
          </p>
        </div>
      )}
    </div>
  );
};

export default EnlargeableImage;