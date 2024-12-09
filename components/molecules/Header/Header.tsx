'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import "../Header/Header.css";
import { useEffect, useState } from "react";
import { LoginRegister } from "@/components/atoms/LoginRegister/LoginRegister";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";

export const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const t = useTranslations('Header');
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const getLocalizedPath = (path: string) => `/${locale}${path}`;

  return (
    <header className="header">
      <nav className="nav">
        <ul className="navlist">
          <li>
            <Link href={getLocalizedPath('/')}>{t('home')}</Link>
          </li>
          <li>
            <Link href={getLocalizedPath('/aboutUs')}>{t('aboutUs')}</Link>
          </li>
          <li>
            <Link href={getLocalizedPath('/contact')}>{t('contact')}</Link>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <LanguageSwitcher />
        <div className="sesion">
          {isAuthenticated 
            ? <Link href={getLocalizedPath('/profile')}>{t('profile')}</Link>
            : <LoginRegister />
          }
        </div>
      </div>
    </header>
  );
};

