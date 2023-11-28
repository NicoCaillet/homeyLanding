import Link from 'next/link';
import React from 'react';

function Card({ title, description, amenities, image }) {
  return (
    <div className="my-4 rounded-xl p-2 shadow-card">
      <img src={image} alt="" className="" />
      <div className="p-2 text-black">
        <p className="text-lg font-semibold text-black lg:text-2xl">{title}</p>
        <p className="lg:text-xl">{description}</p>
        <div>
          {amenities &&
            amenities.map((item, index) => {
              return (
                <div
                  className="flex h-[21px] items-center justify-between "
                  key={index}
                >
                  <div className="flex">
                    <img src="/assets/images/bochini.svg" alt="" />
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
