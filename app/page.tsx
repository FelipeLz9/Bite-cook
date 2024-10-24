"use client"; // Esta línea debe ser la primera en el archivo

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Usamos el router de Next.js para redirección
import Footer from '@/components/molecules/Footer/Footer';
import { Header } from '../components/molecules/Header/Header';
import Card from '../components/atoms/Card/Card';
import CATSection from '../components/organisms/CallToAction/CATSection';

interface Dish {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export default function Home() {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter(); // Usamos el router para la redirección

    useEffect(() => {
       
        // Llamada a la API para obtener los platos
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
    }, [router]); // Se añade router a las dependencias

    const handleLogout = () => {
        // Eliminar el token de autenticación y redirigir al login
        localStorage.removeItem('authToken');
        router.push('/login');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div style={{ backgroundColor: 'white' }}> {/* Fondo blanco */}
            <Header />
            <CATSection />
            {dishes.map((dish) => (
                <Card
                    key={dish.id}
                    title={dish.name}
                    price={dish.price}
                    image={dish.image}
                    description={dish.description}
                    isTrending={false} // Cambia según tu lógica para marcar un plato como "Trending"
                />
            ))}

           
            <Footer />
        </div>
    );
}
