import Link from 'next/link';
import { useEffect, useState } from 'react';

import Card from '../components/card';

const cardData = [
  {
    title: 'Calle Conde De Vilches',
    description: '2-bedroom apartment in Salamanca ',
    // images: ["asd", "asd"],
    image: '/assets/images/room1.svg',
    amenities: [
      '160m',
      'En-suite bathrooms',
      'Fully equipped',
      'Working Space',
    ],
  },
  {
    title: 'Calle San Vicente Ferrer ',
    description: '2-bedroom apartment in Salamanca  ',
    // images: ["asd", "asd"],
    image: '/assets/images/room2.svg',
    amenities: ['88m', '2 bathrooms', 'Utilities Included', 'Working Space'],
  },
  {
    title: 'Calle Molino del Viento',
    description: '3-bedroom apartment in Chamberi  ',
    // images: ["asd", "asd"],
    image: '/assets/images/carrousel.svg',
    amenities: ['100m', 'Shared bathroom', 'Fully equipped', 'Working Space'],
  },
];

const CardSection = ({ ref }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 768,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };

    if (typeof window !== 'undefined') {
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <div className={`mx-auto max-w-[85%] px-3 py-24 lg:py-44`} ref={ref}>
      <h3 className="text-2xl font-medium text-primary-pretitle sm:hidden">
        EXPLORE
      </h3>
      <span className="flex w-full justify-between sm:block sm:text-center">
        {isMobile ? (
          <h2 className="text-4xl font-medium text-primary-pretitle sm:text-3xl">
            Discover Your <br /> Perfect Place
          </h2>
        ) : (
          <h2 className="text-4xl font-medium text-primary-pretitle sm:text-3xl">
            Discover Your Perfect Place
          </h2>
        )}
        <Link href="https://www.instagram.com/homey_madcity/">
          <button className="rounded-lg border-2 border-primary-pretitle bg-white p-2 px-4 font-semibold text-primary-pretitle sm:hidden">
            {' '}
            View others
          </button>
        </Link>
      </span>
      <div className=" mt-12 flex w-full justify-around md:flex-col md:items-center">
        {cardData &&
          cardData.map((item, i) => {
            return (
              <div className="w-[300px] 2xl:w-[340px] 3xl:w-[450px]" key={i}>
                <Card
                  title={item.title}
                  description={item.description}
                  amenities={item.amenities}
                  image={item.image}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { CardSection };
