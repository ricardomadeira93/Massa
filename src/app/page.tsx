import { TopOfferHeader } from '@/components/sections/TopOfferHeader';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { DropsSpecials } from '@/components/sections/DropsSpecials';
import { SubscriptionTeaser } from '@/components/sections/SubscriptionTeaser';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { OrderForm } from '@/components/sections/OrderForm';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { showSeasonalDrop, showSubscription } from '@/lib/feature-flags';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {showSeasonalDrop ? <TopOfferHeader /> : null}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        {showSeasonalDrop ? <DropsSpecials /> : null}
        {showSubscription ? <SubscriptionTeaser /> : null}
        <HowItWorks />
        <OrderForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
