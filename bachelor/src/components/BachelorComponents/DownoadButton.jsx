import React from 'react';

// Styles
import styles from "../../styles/DownloadButton.module.scss";


const DownloadButton = () => {
    return (
        <a href='/Bachelor.pdf' download className={`${styles.downloadAppButton} button-main`} >
            DOWNLOAD PDF
        </a>
    );
}
 
export default DownloadButton;