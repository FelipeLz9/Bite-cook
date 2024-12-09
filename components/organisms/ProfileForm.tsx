"use client";

"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Input from '../atoms/InputField';  
import PasswordInput from '../molecules/PasswordField';
import Button from '../atoms/Button';
import './ProfileForm.css';

export const ProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const t = useTranslations('ProfileForm');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(t('logName'), name);
    console.log(t('logEmail'), email);
    console.log(t('logPassword'), password);
  };

  return (
    <div className="profile-form">
      <h1>{t('title')}</h1>
      <div className="form-group">
        <label>{t('name')}</label>
        <Input 
          placeholder={t('namePlaceholder')}
          value={name}
          name="name"
          onChange={handleNameChange}
          type="text"
        />
        <label>{t('email')}</label>
        <Input 
          placeholder={t('emailPlaceholder')}
          type="email" 
          value={email} 
          name="email"  
          onChange={handleEmailChange} 
        />
        <PasswordInput 
          value={password} 
          onChange={handlePasswordChange} 
          placeholder={t('passwordPlaceholder')}
        />
      </div>
      <div className="form-button">
        <Button onClick={handleSubmit} text={t('saveChanges')} />
      </div>
    </div>
  );
};

