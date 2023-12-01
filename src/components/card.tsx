import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  image: string;
  amenities: string[];
}

function Card({ title, description, amenities, image }: CardProps) {
  return (
    <div className="my-4 rounded-xl p-2 shadow-card">
      <Image src={image} alt="logo" width={500} height={300} loading="lazy" />
      <div className="p-2 text-black">
        <p className="text-lg font-semibold text-black lg:text-2xl">{title}</p>
        <p className="text-sm lg:text-xl">{description}</p>
        <div>
          {amenities &&
            amenities.map((item: any, index: number) => {
              return (
                <div
                  className="flex h-[21px] items-center justify-between "
                  key={index}
                >
                  <div className="flex">
                    <Image
                      src="/assets/images/bochini.svg"
                      alt=""
                      width={10}
                      height={10}
                    />
                    <p className="lg:text-l my-[2px] ml-1 text-sm">{item}</p>
                  </div>
                  <div>
                    {index === amenities.length - 1 ? (
                      <Link href="https://www.instagram.com/homey_madcity/">
                        <button className="mb-5 rounded-lg border-2 border-primary-pretitle bg-primary-pretitle p-2 px-4 text-white hover:bg-white hover:text-primary-pretitle lg:text-xl">
                          {' '}
                          Learn More
                        </button>
                      </Link>
                    ) : null}
                  </div>
                </div>
              );
            })}
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Card;
