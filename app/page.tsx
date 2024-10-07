import Footer from '@/components/molecules/Footer/Footer';
import { Header } from '../components/molecules/Header/Header';
import Card from '../components/atoms/Card/Card';
import CATSection from '../components/organisms/CallToAction/CATSection';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'white' }}> {/* Fondo blanco */}
      <Header />
      <CATSection />
      <Card title={''} price={0} image={''} isTrending={false} />
      <Footer />
    </div>
  );
}
