import React from 'react';
import EnlargeableImage from './EnlargeImage';

// Styles
import styles from "../styles/LoRaPage/LoRaPage.module.scss";
import iconStyles from "../styles/Footer.module.scss";
import smallStyles from "../styles/Icons.module.scss";

// Images
import lora_dm from "../assets/projects_img/Lora_Domain Model.svg";
import lora_deployment from "../assets/projects_img/DeploymentDiagramSEP4.svg";
import mapping from "../assets/projects_img/Screenshot from 2024-03-29 01-03-38.png";
import activity from "../assets/projects_img/ActivityDiagram_IncrementalLoad.svg";
import vis_bi from "../assets/projects_img/PowerBiDashboard-1.png";

import scrum from "../assets/skills/scrum.svg";
import astah from "../assets/skills/astah.svg";
import springboot from "../assets/skills/spring-boot.svg";
import android from "../assets/skills/android.svg";
import c from "../assets/skills/C.png";
import java from "../assets/skills/java.svg";
import aws from "../assets/skills/aws.svg";
import sql from "../assets/skills/microsoft-sql-server-logo-svgrepo-com.svg";
import bi from "../assets/skills/powerBi.svg";

const LoRaDescription = () => {
    return (
        <div className={`${styles.ourMissionBanner} context-wrapper bottom-divider-large`}>
            <div className={styles.missionContext}>
                <h1 className={`${styles.missionTitle} title-second`}>Domain Model</h1>
                <br/>
                <p className={`${styles.missionText} text-main`}>The domain model shown below is built after the analysis of the user stories. It's a visualisation tool to highlight the actors involved in the interaction with the system and the flow of events that needs to be followed. The domain model shows the classes and their relationships within the domain of a remote greenhouse automation. </p>
                <br />
                <img className={styles.missionImage} src={lora_dm} alt="" />
                <br />
                <br />
                
                <h1 className={`${styles.storyTitle} title-second`}>Deployment Diagram </h1>
                <p className={`${styles.storyText} text-main`}>The deployment diagram illustrates the overall architecture of the system and its structure in terms of specified components and their interrelationships.</p>
                <br/>
                <img className={styles.missionImage} src={lora_deployment} alt="" />
                <br />
                <br />

                <h1 className={`${styles.storyTitle} title-second`}>Dimensional modelling</h1>
                <p className={`${styles.storyText} text-main`}>Ilustrated below is a thorough examination of the data flow process from the source database to the data warehouse, focusing specifically on the fact table.</p>
                <br/>
                <EnlargeableImage  src={mapping} alt="" />
                <br />
                <p className={`${styles.storyText} text-main`}>After transferring the data from the staging area to the enterprise data warehouse, a change data capture system was implemented. This system ensures that the data warehouse remains updated with the latest entries from the source database without requiring a full reload each time a new entry is added.</p>
                <br/>
                <p className={`${styles.storyText} text-main`}>A log mining approach was adopted to capture all changes in the database. This approach effectively decouples the operational system from the data warehouse, allowing for efficient and synchronized data updates.</p>
                <br/>
                <img className={styles.missionImage} src={activity} alt="" />
                <br/>
                <br />
                
                <h1 className={`${styles.storyTitle} title-second`}>Visualisation with PowerBI</h1>
                <p className={`${styles.storyText} text-main`}>After completing the dimensional modeling process and considering the business requirements, visual analysis becomes essential for providing a comprehensive overview of the collected data. Visual analytics, which integrates visualization, human factors, and data analysis, offers an effective approach in this regard.</p>
                <br />
                <p className={`${styles.storyText} text-main`}>The comprehensive business objective is to achieve automation through threshold and environmental value comparison graphs, making them the primary choice for data visualization. To ensure symmetry in the dataset, a mean approach was adopted.</p>
                <br/>
                <img className={styles.missionImage} src={vis_bi} alt="" />
                <br />
                <br/>
            </div>

            <div className={`${styles.footerContext} context-wrapper`}>
                <section className={iconStyles.footerBottom}>
                    <p>Language, frameworks and tools</p>
                    <br />
                    <br />
                    <div className={smallStyles.teamCard}>
                        <div className={smallStyles.cardTitle}>
                            <img src={scrum} alt="" />
                            <img src={astah} alt="" />
                            <img src={springboot} alt="" />
                            <img src={android} alt="" />
                        </div>

                        <div className={smallStyles.cardTitle}>
                            <img src={c} alt="" />
                            <img src={java} alt="" />
                            <img src={aws} alt="" />
                            <img src={sql} alt="" />
                        </div>

                        <div className={smallStyles.cardTitle}>
                            <img src={bi} alt="" />
                        </div>
                    </div>     
                </section>
            </div>   
        </div>
    );
}
 
export default LoRaDescription;     