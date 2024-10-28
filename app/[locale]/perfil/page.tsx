"use client"; // Esta línea debe ser la primera en el archivo

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Usamos el router de Next.js para redirección
import Footer from '@/components/molecules/Footer/Footer';
import { Header } from '@/components/molecules/Header/Header';
import { ProfileTemplate } from '@/components/screens/ProfileTemplate';
import Sidebar from '@/components/organisms/Sidebar'; // Asegúrate de importar Sidebar correctamente
import { useLocale } from 'next-intl';
import './page.css';

interface Dish {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export default function Perfil() {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Estado para verificar si está autenticado
    const router = useRouter(); // Usamos el router para la redirección
    const locale = useLocale();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push(`/${locale}/login`);
        } else {
            setIsAuthenticated(true);
        }

        const fetchDishes = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dishes`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDishes(data);
            } catch (error: any) {
                console.error('Error fetching dishes:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDishes();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        router.push(`/${locale}/login`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
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
