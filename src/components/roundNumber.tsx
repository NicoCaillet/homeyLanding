import React from 'react';

function RoundNumber({ number, title, description }) {
  return (
    <div className="relative h-52 w-52 ">
      <div className=" m-auto flex h-[60%] w-[60%] items-center justify-center rounded-full bg-primary-pretitle">
        <div className="flex h-[80%] w-[80%] items-center justify-center rounded-full bg-primary-king-blue ">
          <p className="text-5xl font-semibold text-white">{number}</p>
        </div>
      </div>
      <p className=" mt-4 text-center text-xl font-semibold text-white">
        {title}
      </p>
      <p className=" mt-1 text-center text-lg text-white">{description}</p>
    </div>
  );
}

export default RoundNumber;
