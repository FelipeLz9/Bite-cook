"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import './Form.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('auth');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('authToken', token);
        router.push(`/${locale}/profile`);
      } else {
        const { message } = await response.json();
        setError(message || t('loginError'));
      }
    } catch {
      setError(t('loginError'));
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="email">{t('email')}</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">{t('password')}</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{t('login')}</button>
        <Link href={`/${locale}/register`} className="register-link">
          {t('register')}
        </Link>
      </form>
    </div>
  );
};
