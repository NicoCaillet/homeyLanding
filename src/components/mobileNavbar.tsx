import Image from 'next/image';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

const MobileNavbar = ({ refs, navigateTo }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" text-white">
      <div className="">
        {isOpen ? (
          <IoCloseSharp
            onClick={toggleNavbar}
            className="relative top-[15px] z-20 cursor-pointer text-3xl text-white nsm:hidden"
          />
        ) : (
          <FaBars
            onClick={toggleNavbar}
            className="relative top-[15px] z-20 cursor-pointer text-2xl nsm:hidden"
          />
        )}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute right-0 top-0 z-10 h-[-webkit-fill-available] h-[809px] w-full bg-primary-king-blue p-8`}
        >
          <div>
            <Image
              src="/assets/images/Homey-Logo.webp"
              alt="logo"
              className="sm:w-1/4"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
          <div className="mt-5">
            <div
              className="block cursor-pointer  py-3 lg:inline-block"
              onClick={toggleNavbar}
            >
              Home
            </div>
            <div
              className="block cursor-pointer  py-3 lg:inline-block  "
              onClick={() => navigateTo(refs.verticalFeaturesRef, 0)}
            >
              How it Works
            </div>
            <div
              className="block cursor-pointer  py-3 lg:inline-block "
              onClick={() => navigateTo(refs.verticalFeaturesRef, 2550)}
            >
              For LandLords
            </div>
            <div
              className="block cursor-pointer  py-3 lg:inline-block "
              onClick={() => navigateTo(refs.footerRef, 0)}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
