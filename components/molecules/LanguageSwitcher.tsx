'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState(locale);

    const switchLanguage = (newLocale: string) => {
        if (newLocale === currentLocale) return;

        startTransition(() => {
            const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
            router.push(newPathname);
            setCurrentLocale(newLocale);
        });
    };

    return (
        <div className="language-switcher">
            <button 
                onClick={() => switchLanguage('es')}
                className={`language-button ${currentLocale === 'es' ? 'active' : ''}`}
                disabled={isPending}
            >
                ES
            </button>
            <button 
                onClick={() => switchLanguage('en')}
                className={`language-button ${currentLocale === 'en' ? 'active' : ''}`}
                disabled={isPending}
            >
                EN
            </button>
        </div>
    );
}

