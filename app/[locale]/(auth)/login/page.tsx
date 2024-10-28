import { useTranslations } from 'next-intl';
import { LoginForm } from '@/components/screens/Login';
import Footer from '@/components/molecules/Footer/Footer';

export default function LoginPage() {
    const t = useTranslations('auth'); 
    return (
        <div>
            <LoginForm />
            <Footer />
        </div>
    );
}
