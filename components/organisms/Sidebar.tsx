import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import './Sidebar.css';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const t = useTranslations('Sidebar');
  const locale = useLocale();

  return (
    <div className="sidebar">
      <ul>
        <li><Link href={`/${locale}/recipes`}>{t('recipes')}</Link></li>
        <li><Link href={`/${locale}/orders`}>{t('orders')}</Link></li>
        <li><Link href={`/${locale}/settings`}>{t('settings')}</Link></li>
      </ul>
      <button className="logout-button" onClick={onLogout}>{t('logout')}</button>
    </div>
  );
};

export default Sidebar;

