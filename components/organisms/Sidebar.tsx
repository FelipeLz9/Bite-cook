import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { jwtDecode } from 'jwt-decode';
import './Sidebar.css';

interface SidebarProps {
  onLogout: () => void;
  isAdmin: boolean;
}

interface DecodedToken {
  userId: string;
  email: string;
  role: string;
  exp: number; 
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false); 
  const t = useTranslations('Sidebar');
  const locale = useLocale();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decodedToken: DecodedToken = jwtDecode(token); 
        setIsAdmin(decodedToken.role?.toUpperCase() === 'ADMIN'); 
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
  }, []);

  return (
    <div className="sidebar">
      <ul>
        <li><Link href={`/${locale}/recipes`}>{t('recipes')}</Link></li>
        <li><Link href={`/${locale}/orders`}>{t('orders')}</Link></li>
        <li><Link href={`/${locale}/settings`}>{t('settings')}</Link></li>

        {isAdmin && ( 
          <li>
            <Link href={`/${locale}/admin`}>{t('adminView')}</Link>
          </li>
        )}
      </ul>

      <button className="logout-button" onClick={onLogout}>
        {t('logout')}
      </button>
    </div>
  );
};

export default Sidebar;
