"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/molecules/Footer/Footer";
import { Header } from "@/components/molecules/Header/Header";
import { ProfileTemplate } from "@/components/screens/ProfileTemplate";
import Sidebar from "@/components/organisms/Sidebar";
import { useLocale, useTranslations } from "next-intl";
import "./page.css";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

interface Dish {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function Profile() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Profile");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push(`/${locale}/login`);
    } else {
      setIsAuthenticated(true);
    }

    const fetchDishes = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/dishes`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDishes(data);
      } catch (error: unknown) {
        console.error("Error fetching dishes:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, [router, locale]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push(`/${locale}/`);
  };

  if (loading) {
    return <div>{t("loading")}</div>;
  }

  if (error) {
    return <div>{t("error", { error })}</div>;
  }

  return (
    <div className="profile-page">
      <Header />
      <div className="content-container">
        <ProfileTemplate onLogout={handleLogout} />
        <Sidebar onLogout={handleLogout} />
      </div>
      <Footer />
    </div>
  );
}
