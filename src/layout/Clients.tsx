import { useState } from 'react';

import { StarRating } from '../components/star';

const ClientLayout = ({ refs }) => {
  // const stars = [];
  // for (let i = 0; i < 5; i++) {
  //   stars.push(<MdOutlineStar key={i} size={25} color="white" />);
  // }
  const [data, setData] = useState([
    {
      quote:
        "“Moved to a Homey apartment a few months ago and it's been awesome. Love the flexibility and the vibe here. My flat's cozy and stylish, and I've already made some great mates. Homes 4 Homies”",
      name: 'Ahan',
      place: 'Calle Conde de Vilches',
      stars: 4,
    },
    {
      quote:
        "“Just hit my six-month mark at Homey and honestly, it's been pretty cool. The place has a chill vibe and everyone's super friendly. Pretty glad I moved here”",
      name: 'Edwin',
      place: 'Calle Molino del Viento',
      stars: 4,
    },
    {
      quote:
        '“Spent my summer at a Homey spot and it was pretty chill. The place had a cool vibe, and I met some awesome people”',
      name: 'Sofia',
      place: 'Calle San Vicente Ferrer',
      stars: 5,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.length - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <div
      className="h-full bg-[url('/assets/images/bg-flag.png')] bg-top"
      ref={refs}
    >
      <div className="h-full bg-[url('/assets/images/mountains.png')] bg-cover">
        <div className="m-[auto] max-w-[85%] text-center  ">
          <h3 className="pt-56 text-5xl font-semibold text-white sm:pt-32 sm:text-3xl">
            What our clients say
          </h3>
          <div>
            <span className="mt-5 flex items-center justify-center">
              <div
                onClick={handlePrev}
                className=" bg-primary-bluetone mr-4 flex h-10 cursor-pointer items-center rounded-xl border-primary-pretitle bg-primary-secondButton px-4 pb-1 text-4xl text-white outline-none"
              >
                ←
              </div>
              <div
                onClick={handleNext}
                className="bg-primary-bluetone flex h-10 cursor-pointer items-center rounded-xl border-primary-pretitle bg-primary-secondButton px-4 pb-1 text-4xl text-white outline-none"
              >
                →
              </div>
            </span>
            <div className="m-auto flex w-1/3 justify-center pt-10 text-center text-xl italic leading-loose text-white sm:w-[88%]">
              <p className="m-auto mb-12 h-[220px] w-[400px] sm:h-60 sm:w-[320px]">
                {data[currentIndex]?.quote}
              </p>
            </div>

            <div className="mt-12 pb-52 text-white sm:pb-36">
              <p className="text-xl font-semibold text-white">
                {data[currentIndex]?.name} resident at
              </p>
              <p className="text-xl font-semibold text-primary-startone">
                {data[currentIndex]?.place}
              </p>
              <div className="flex items-center justify-center text-xl ">
                <StarRating stars={data[currentIndex]?.stars} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClientLayout };
