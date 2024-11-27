"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import "../Header/Header.css";
import { useEffect, useState } from "react";
import { LoginRegister } from "@/components/atoms/LoginRegister/LoginRegister";

export const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const t = useTranslations('Header');
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] || 'es';

  const router = useRouter(); // Usamos el router para la redirección
  const locale = useLocale();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
        setIsAuthenticated(false)
    } else {
        setIsAuthenticated(true);
    }
  }, [])
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
        
        {
          isAuthenticated?
          <Link href={`/${currentLocale}/perfil`}>{t('profile')}</Link>
          : <LoginRegister></LoginRegister>
        }
      </div>
    </header>
  );
};
