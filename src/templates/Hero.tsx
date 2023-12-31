import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Background } from '../background/Background';
import MobileNavbar from '../components/mobileNavbar';
import StaggeredDropDown from '../CustomButton/Button';
// import { Button } from "../button/Button";
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = ({ allRefs }: any) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 768,
  );

  const scrollToSection = (ref: any, add?: any) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop + add,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };

    // Check if window is available
    if (typeof window !== 'undefined') {
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    // Return a no-op function if window is undefined
    return () => {};
  }, []);

  return (
    <Background color="bg-primary-pretitle">
      <div className="p-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          {isMobile ? (
            <MobileNavbar refs={allRefs} navigateTo={scrollToSection} />
          ) : (
            <>
              <li className="caca text-sm text-white">
                <div
                  onClick={() =>
                    scrollToSection(allRefs.verticalFeaturesRef, 0)
                  }
                  className=" cursor-pointer"
                >
                  About us
                </div>
              </li>
              <li className="text-sm text-white">
                <div
                  onClick={() =>
                    scrollToSection(allRefs.verticalFeaturesRef, 800)
                  }
                  className=" cursor-pointer"
                >
                  How it works
                </div>
              </li>
              <li className="text-sm text-white">
                <div
                  onClick={() =>
                    scrollToSection(allRefs.verticalFeaturesRef, 1350)
                  }
                  className=" cursor-pointer"
                >
                  For LandLords
                </div>
              </li>
              <li className="text-sm text-white">
                <div
                  onClick={() => scrollToSection(allRefs.footerRef, 0)}
                  className=" cursor-pointer"
                >
                  Contact
                </div>
              </li>
            </>
          )}
        </NavbarTwoColumns>
      </div>
      <Section yPadding="pt-5">
        <HeroOneButton
          title={
            <>
              <span className="flex justify-center text-primary-500">
                <Image
                  src="/assets/images/Homey-Logo.webp"
                  alt="logo"
                  className="sm:w-1/2 nsm:w-[20%] 2xl:w-[13%]"
                  width={300}
                  height={100}
                  loading="lazy"
                />
              </span>
              <p className="text-5xl text-white sm:text-2xl">
                Let's find your next home
              </p>
            </>
          }
          description=""
          button={<div className="bg-transparent"></div>}
        />
      </Section>

      <StaggeredDropDown />
      <div className="w-full">
        <Image
          src="/assets/images/living.webp"
          alt=""
          className="-mt-32 mb-[-8px] w-full lg:-mt-64 sm:hidden"
          width={1500}
          height={600}
          loading="lazy"
        />
      </div>

      {/* CAMBIAR A WEBP FACUNDO */}
      <Image
        src="/assets/images/mobilebg.webp"
        alt=""
        className="mb-[-8px] hidden h-full w-full sm:block"
        width={500}
        height={300}
        loading="lazy"
      />
    </Background>
  );
};

export { Hero };
