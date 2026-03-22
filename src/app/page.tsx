import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { OrderForm } from '@/components/sections/OrderForm';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <HowItWorks />
        <OrderForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
