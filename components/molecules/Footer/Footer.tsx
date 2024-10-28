'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const t = useTranslations('Footer');
  const pathname = usePathname();

  return (
    <footer className="footer">
      <div className="footer__links">
        <Link href="#" locale={pathname.split('/')[1]}>{t('about')}</Link>
        <Link href="#" locale={pathname.split('/')[1]}>{t('blog')}</Link>
        <Link href="#" locale={pathname.split('/')[1]}>{t('signUpToDeliver')}</Link>
        <Link href="#" locale={pathname.split('/')[1]}>{t('addRestaurant')}</Link>
        <Link href="#" locale={pathname.split('/')[1]}>{t('getHelp')}</Link>
        <Link href="#" locale={pathname.split('/')[1]}>{t('seeAllCities')}</Link>
        <Link href="#" locale={pathname.split('/')[1]}>{t('restaurantsNearMe')}</Link>
        <Link href="#" locale={pathname.split('/')[1]}>{t('viewAllCuisines')}</Link>
        <Link href="#" locale={pathname.split('/')[1]}>{t('viewAllCountries')}</Link>
      </div>

      <div className="footer__social-icons">
        <a href="https://x.com/pabloocampo25?s=11&t=Q3yRPAbyjkeAvuTSvvt3gw" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/PabloUZ/bite-cook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/pabloocampo125/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className="footer__copyright">
        <p>{t('copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;