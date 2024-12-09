'use client'

import { useTranslations } from 'next-intl';
import { LoginForm } from '@/components/screens/Login';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Footer from '@/components/molecules/Footer/Footer';

/* eslint-disable @typescript-eslint/no-unused-vars */

export default function LoginPage() {
    const t = useTranslations('auth'); 
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
          router.replace('/profile');
        }
      }, [isAuthenticated, router]);
      
    return (
        <div>
            <LoginForm />
            <Footer />
        </div>
    );
}
