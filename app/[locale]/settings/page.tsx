'use client';

import React, { useState } from "react";
import "./page.css";
import Footer from "@/components/molecules/Footer/Footer";
import { Header } from "@/components/molecules/Header/Header";
import { useTranslations } from 'next-intl';

// Mock data for user settings
const initialSettings = {
  address: '',
  phoneNumber: '',
  emailNotifications: true,
  pushNotifications: false,
  privacyMode: false
};

const UserSettingsPage: React.FC = () => {
  const t = useTranslations('settings');
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (setting: string, value: string | boolean) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [setting]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically send the settings to your backend
    console.log('Saving settings:', settings);
    // Show a success message or handle errors
  };

  return (
    <>
      <Header />
      <div className="settings-page">
        <div className="settings-page__container">
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
          <div className="settings-grid">
            <div className="setting-card">
              <h3>{t('address')}</h3>
              <textarea
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder={t('addressPlaceholder')}
              />
            </div>
            <div className="setting-card">
              <h3>{t('phoneNumber')}</h3>
              <input
                type="tel"
                value={settings.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                placeholder={t('phoneNumberPlaceholder')}
              />
            </div>
            <div className="setting-card">
              <h3>{t('emailNotifications')}</h3>
              <label>
                <input 
                  type="checkbox" 
                  checked={settings.emailNotifications} 
                  onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                />
                {t('enable')}
              </label>
            </div>
            <div className="setting-card">
              <h3>{t('pushNotifications')}</h3>
              <label>
                <input 
                  type="checkbox" 
                  checked={settings.pushNotifications} 
                  onChange={(e) => handleChange('pushNotifications', e.target.checked)}
                />
                {t('enable')}
              </label>
            </div>
            <div className="setting-card">
              <h3>{t('privacyMode')}</h3>
              <label>
                <input 
                  type="checkbox" 
                  checked={settings.privacyMode} 
                  onChange={(e) => handleChange('privacyMode', e.target.checked)}
                />
                {t('enable')}
              </label>
            </div>
          </div>
          <button className="save-settings-button" onClick={handleSave}>{t('saveSettings')}</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserSettingsPage;
