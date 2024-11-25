"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importar useRouter
import axios from "axios";
import { useTranslations } from "next-intl";
import "./Form.css";

export const RegisterForm = () => {
  const router = useRouter(); // Inicializar useRouter
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const t = useTranslations("auth");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage(t("registerError"));
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/users", { name, email, password });
      setSuccessMessage(t("registerSuccess"));
      setErrorMessage("");

      // Redirigir al login después de un registro exitoso
      setTimeout(() => {
        router.push("/${locale}/login");
      }, 1500); // Esperar 1.5 segundos para mostrar el mensaje de éxito

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      setErrorMessage(error.response?.data.message || t("registerError"));
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">{t("name")}</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">{t("email")}</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">{t("password")}</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">{t("confirmPassword")}</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">{t("register")}</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
};
