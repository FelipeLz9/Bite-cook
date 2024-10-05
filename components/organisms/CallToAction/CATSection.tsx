import React from 'react';
import styles from './CATSection.module.css';

const CallToActionSection = () => {
    return (
        <div className={styles.hero}>
        <div className={styles.content}>
            <h1 className={styles.title}>Choose your favorite dish and order it now</h1>
            <div className={styles.searchContainer}>
            <input type="text" placeholder="Search for a dish" className={styles.searchInput} />
            <button className={styles.orderButton}>Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default CallToActionSection;
