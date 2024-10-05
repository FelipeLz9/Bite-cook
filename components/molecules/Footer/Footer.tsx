import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer__links">
        <Link href="#">About</Link>
        <Link href="#">Read our blog</Link>
        <Link href="#">Sign up to deliver</Link>
        <Link href="#">Add your restaurant</Link>
        <Link href="#">Get help</Link>
        <Link href="#">See all cities</Link>
        <Link href="#">Restaurants near me</Link>
        <Link href="#">View all cuisines</Link>
        <Link href="#">View all countries</Link>
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
        <p>©2024 PipsPabsCompany</p>
      </div>
    </footer>
  );
};

export default Footer;
