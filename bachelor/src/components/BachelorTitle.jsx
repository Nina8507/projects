import React from 'react';

// Styles
import styles from "../styles/LoRaPage/LoRaPage.module.scss";

const BachelorTitle = () => {
    return (
        <div className={`${styles.aboutHero} context-wrapper bottom-divider-large`}>
            <h1 className={`${styles.heroTitle} title-main`}>Bachelor Thesis</h1>
            <br /> 
            
            <h2 className={`${styles.cardsTitle} title-second`}>Dimensionality Reduction with Binary Constraint Autoencoder and Binary Hashing</h2>
            <p className={`${styles.heroText} text-main bottom-divider`}>This project proposes a pipeline leveraging autoencoders and binary hashing for dimensionality reduction, optimized storage, and supporting fast lookup functionality. The pipeline is designed for applicability in downstream tasks involving computer vision and can run on standard computers, thereby addressing the high computational resource requirements often associated with deep learning models.</p>
            <h2 className={`${styles.cardsTitle} title-second`}>Collaborative Perspectives: Opinions on the Project</h2>
            
            <div className={styles.aboutCards}>
                <div className={styles.row}>
                    <div className={styles.aboutCard}>
                        <i className='fas fa-users'></i>
                        <div className={styles.cardContext}>
                            <h3>Systematic ApS</h3>
                            <h4>Company</h4>
                            <p className='text-main2'>The project team undertook a master's thesis-level project and delivered admirable results. The software they developed is currently being expanded upon and utilized internally.</p>
                        </div>
                    </div>
                    <div className={styles.aboutCard}>
                        <i className='fas fa-earth-americas'></i>
                        <div className={styles.cardContext}>
                            <h3>VIA University College</h3>
                            <h4>Supervisors</h4>
                            <p className='text-main2'>As supervisors, we strive to guide the students in the right direction and to be able to answer all their questions. However, this project addressed a topic outside the school curriculum, yet the project team managed to deliver results that exceeded our expectations. We were excited to see the end result, and it did not disappoint.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.aboutCard}>
                        <i className='fas fa-magnifying-glass'></i>
                        <div className={styles.cardContext}>
                            <h3>Priyanka</h3> <h4>Team Member</h4> 
                            <p className='text-main2'>The project provided an opportunity for personal growth particularly in terms of research skills and technical knowledge such as working with GPUs. The process of trying out
                                different models throughout the project was an invaluable learning curve for me.Every failed model that I tried in the project served as
                                a valuable learning process and contributed to my understanding and growth.</p>
                        </div>
                    </div>
                    <div className={styles.aboutCard}>
                        <i className='fas fa-compass'></i>
                        <div className={styles.cardContext}>
                        <h3>Mark</h3> <h4>Team Member</h4>
                            <p className='text-main2'>I am certain that this project has fortified all of our technical skills and gathered valuable lessons in resilience, collaboration, and problem-solving, lessons that will be
                                instrumental in our forthcoming software engineering pursuits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BachelorTitle;