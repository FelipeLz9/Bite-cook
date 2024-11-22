'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './CATSection.module.css';

const CallToActionSection = () => {
    const t = useTranslations('CATSection');

    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t('title')}</h1>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder={t('searchPlaceholder')} className={styles.searchInput} />
                    <button className={styles.orderButton}>{t('orderNow')}</button>
                </div>
            </div>
        </div>
    );
};

export default CallToActionSection;