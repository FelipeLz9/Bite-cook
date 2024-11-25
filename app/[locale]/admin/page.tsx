"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import "./page.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

const AdminPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const t = useTranslations('AdminPage');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/dishes", {
        name,
        description,
        price,
        image,
      });

      setSuccessMessage(t('successMessage'));
      setErrorMessage("");
      
      setName("");
      setDescription("");
      setPrice("");
      setImage("");

      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    } catch (error: any) {
      setErrorMessage(error.response?.data.message || t('errorMessage'));
      setSuccessMessage("");
    }
  };

  return (
    <div className="admin-container">
      <h1>{t('title')}</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label htmlFor="name">{t('name')}</label>
        <input
          type="text"
          id="name"
          placeholder={t('namePlaceholder')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="description">{t('description')}</label>
        <textarea
          id="description"
          placeholder={t('descriptionPlaceholder')}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="price">{t('price')}</label>
        <input
          type="text"
          id="price"
          placeholder={t('pricePlaceholder')}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label htmlFor="image">{t('image')}</label>
        <input
          type="text"
          id="image"
          placeholder={t('imagePlaceholder')}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">{t('addProduct')}</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
};

export default AdminPage;