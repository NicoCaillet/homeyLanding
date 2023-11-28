import { useRef } from 'react';

import { ClientLayout } from '../layout/Clients';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { CardSection } from './CardSection';
// import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const verticalFeaturesRef = useRef<HTMLDivElement>(null);
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const clientLayoutRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const allRefs = {
    verticalFeaturesRef,
    cardSectionRef,
    clientLayoutRef,
    footerRef,
  };

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero allRefs={allRefs} />
      <div ref={verticalFeaturesRef}>
        <VerticalFeatures />
      </div>
      <div ref={cardSectionRef}>
        <CardSection />
      </div>
      <div ref={clientLayoutRef}>
        <ClientLayout />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export { Base };
