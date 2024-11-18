import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

type Props = {}

export const LoginRegister = (props: Props) => {
  const pathname = usePathname();
  const t = useTranslations('Header');
  
  const currentLocale = pathname.split('/')[1] || 'es';
  return (
    <>
    <Link href={`/${currentLocale}/login`}>{t('login')}</Link>
    <Link href={`/${currentLocale}/register`}>{t('register')}</Link>
    </>
  )
}