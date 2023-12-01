import Image from 'next/image';
import type { ReactNode } from 'react';

type ICenteredFooterProps = {
  logo?: ReactNode;
  iconList?: ReactNode;
  children?: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <nav>
      <p className="text-primary-bluetone text-4xl font-semibold">
        COMING SOON...
      </p>
      <Image
        src="/assets/images/results.webp"
        alt=""
        className="m-auto h-full w-full pt-5"
        width={1000}
        height={500}
        loading="lazy"
      />
      <p className="pt-5 text-4xl font-semibold text-primary-pretitle">
        Get in touch!
      </p>
      <p className="text-xl font-semibold text-black">
        Our team is more than happy <br /> to hear from you!
      </p>
      <div className="flex items-center justify-center pt-5">
        <a href="whatsapp://send?abid=33657126472&text=Hello%2C%I%2C%Am%2C%Interested!">
          <Image
            src="/assets/images/WhatsApp.svg"
            className="mr-3 w-8 rounded-xl bg-primary-pretitle"
            alt=""
            width={10}
            height={10}
          />
        </a>
        <a href="https://www.instagram.com/homey_madcity/">
          <Image
            className="w-8 rounded-xl bg-primary-pretitle"
            src="/assets/images/Instagram.svg"
            alt=""
            width={10}
            height={10}
          />
        </a>
      </div>
      <p className="pt-4 text-xs font-semibold text-black">+33657126472</p>
      <p className="text-xs font-semibold text-black">
        homeymadrid.rentals@gmail.com
      </p>
      <p className="text-xs font-semibold text-black sm:pb-12">
        @homey_madcity
      </p>

      <ul className="navbar mt-5 flex flex-row justify-center text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>

    {/* <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div> */}

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
