import React, { useState } from 'react';
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
          } absolute right-0 top-0 z-10 h-[-webkit-fill-available] w-full bg-primary-king-blue p-8`}
        >
          <div>
            <img
              src="/assets/images/Homey-Logo.svg"
              className=" sm:w-1/6"
              alt="logo"
            />
          </div>
          <div className="mt-5">
            <div className="block py-3  lg:inline-block">Home</div>
            <div
              className="block py-3  lg:inline-block "
              onClick={() => navigateTo(refs.verticalFeaturesRef)}
            >
              How it Works
            </div>
            <div
              className="block py-3  lg:inline-block "
              onClick={() => navigateTo(refs.cardSectionRef)}
            >
              For LandLords
            </div>
            <div
              className="block py-3  lg:inline-block "
              onClick={() => navigateTo(refs.footerRef)}
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
