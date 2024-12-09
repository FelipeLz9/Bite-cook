'use client';

import React from "react";
import "./page.css";
import Footer from "@/components/molecules/Footer/Footer";
import { Header } from "@/components/molecules/Header/Header";
import { useTranslations } from 'next-intl';

const ContactUs: React.FC = () => {
  const t = useTranslations('contactUs');

  return (
    <>
      <Header />
      <div className="contact-us">
        <div className="contact-us__container">
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
          <form className="contact-us__form">
            <label htmlFor="name">{t('form.name')}</label>
            <input type="text" id="name" name="name" placeholder={t('form.namePlaceholder')} />

            <label htmlFor="email">{t('form.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('form.emailPlaceholder')}
            />

            <label htmlFor="message">{t('form.message')}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t('form.messagePlaceholder')}
              rows={5}
            ></textarea>

            <button type="submit" className="contact-us__button">
              {t('form.send')}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

