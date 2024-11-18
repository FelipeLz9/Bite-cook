'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function LanguageSwitcher() {
    const locale = useLocale();

    return (
    <div>
        <Link href="/" locale="es">
        Español
        </Link>
        <Link href="/" locale="en">
        English
        </Link>
    </div>
    );
}