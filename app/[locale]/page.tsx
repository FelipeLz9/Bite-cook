'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Footer from '@/components/molecules/Footer/Footer';
import { Header } from '@/components/molecules/Header/Header';
import Card from '@/components/atoms/Card/Card';
import CATSection from '@/components/organisms/CallToAction/CATSection';

interface Dish {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const t = useTranslations();

    useEffect(() => {
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
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        router.push(`/${locale}/login`);
    };

    if (loading) {
        return <div>{t('loading')}</div>;
    }

    if (error) {
        return <div>{t('error', { error })}</div>;
    }

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Header />
            <CATSection />
            {dishes.map((dish) => (
                <Card
                    key={dish.id}
                    title={dish.name}
                    price={dish.price}
                    image={dish.image}
                    description={dish.description}
                    isTrending={false}
                />
            ))}
            <Footer />
        </div>
    );
}