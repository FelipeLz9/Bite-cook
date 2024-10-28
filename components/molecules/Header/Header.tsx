'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import "../Header/Header.css";

export const Header = () => {
  const t = useTranslations('Header');
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="nav">
        <ul className="navlist">
          <li>
            <Link href="/" locale={pathname.split('/')[1]}>{t('home')}</Link>
          </li>
          <li>
            <Link href="/aboutUs" locale={pathname.split('/')[1]}>{t('aboutUs')}</Link>
          </li>
          <li>
            <Link href="/contact" locale={pathname.split('/')[1]}>{t('contact')}</Link>
          </li>
        </ul>
      </nav>
      <div className="sesion">
        <Link href="/perfil" locale={pathname.split('/')[1]}>{t('profile')}</Link>
        <Link href="/login" locale={pathname.split('/')[1]}>{t('login')}</Link>
        <Link href="/register" locale={pathname.split('/')[1]}>{t('register')}</Link>
      </div>
    </header>
  );
};