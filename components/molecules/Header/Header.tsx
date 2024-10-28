'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import "../Header/Header.css";

export const Header = () => {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] || 'es';

  return (
    <header className="header">
      <nav className="nav">
        <ul className="navlist">
          <li>
            <Link href={`/${currentLocale}/`}>{t('home')}</Link>
          </li>
          <li>
            <Link href={`/${currentLocale}/aboutUs`}>{t('aboutUs')}</Link>
          </li>
          <li>
            <Link href={`/${currentLocale}/contact`}>{t('contact')}</Link>
          </li>
        </ul>
      </nav>
      <div className="sesion">
        <Link href={`/${currentLocale}/perfil`}>{t('profile')}</Link>
        <Link href={`/${currentLocale}/login`}>{t('login')}</Link>
        <Link href={`/${currentLocale}/register`}>{t('register')}</Link>
      </div>
    </header>
  );
};
