import React from 'react';
import DownloadButton from "../components/DownoadButton";

// Styles
import styles from "../styles/LoRaPage/LoRaPage.module.scss";
import iconStyles from "../styles/Footer.module.scss";
import smallStyles from "../styles/Icons.module.scss";

// Icons
import scrum from '../assets/skills/scrum.svg'
import python from "../assets/skills/python.svg";
import tensorflow from "../assets/skills/tensorflow.svg";
import docker from "../assets/skills/docker.svg";
import jira from "../assets/skills/atlassian.svg";
import scikit from "../assets/skills/Scikit_learn_logo.svg";

const BachelorDescription = () => {
    return (
        <div className={`${styles.ourMissionBanner} context-wrapper bottom-divider-large`}>
            <div className={styles.missionContext}>
                <h1 className={`${styles.missionTitle} title-second`}>Abstract</h1>
                <p className={`${styles.missionText} text-main`}>The autoencoder model is a U-Net style architecture, characterized by an encoder, a latent space
                    representation, and a decoder, is used to compress and decompress vector space. This model incorporates a binary hashing constraint as a
                    convolutional layer substitute function in the encoder. </p>
                <br/>
                <p className={`${styles.missionText} text-main`}>The Barlow Twins' model is utilised to validate the efficacy of the
                    autoencoder, and hyperparameter optimization is achieved using the Optuna software.</p>
                <br />
                <br />
                <br />
                

                <p className={`${styles.missionText} text-main2`}>The confidentiality agreement signed with the company warns against disclosing
                    implementation details outside the agreed-upon parties.</p>
                <br />
                <br />
                <br />
                <br />

            </div>
            <div className={`${styles.footerContext} context-wrapper`}>
                <section className={iconStyles.footerBottom}>
                    <p>Language, frameworks and tools</p>
                    <br />
                    <br/>
                    <div className={smallStyles.teamCard}>
                        <div className={smallStyles.cardTitle}>
                            <img src={scrum} alt="" />
                            <img src={python} alt="" />
                            <img src={docker} alt="" />
                        </div>

                        <div className={smallStyles.cardTitle}>
                            <img src={tensorflow} alt="" />
                            <img src={scikit} alt="" />
                            <img src={jira} alt="" />
                        </div>
                    </div>     
                </section>
            </div>   
        </div>
    );
}
 
export default BachelorDescription;