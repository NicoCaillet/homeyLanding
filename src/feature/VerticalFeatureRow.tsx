import className from 'classnames';
import { useRouter } from 'next/router';

import RoundNumber from '@/components/roundNumber';

interface Bar {
  title: string;
  subtitle: string;
  number: string;
}

type IVerticalFeatureRowProps = {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  preTitle?: string;
  roundNumbers?: boolean;
  children?: Bar[];
  addtext?: string;
  lastText?: string;
  ref?: any;
  sectionData?: Bar[];
  activeButton?: boolean;
};
const numbers = [
  {
    number: 1,
    description: 'Select your ideal stay and dates.',
    title: 'Find Your Home',
  },
  {
    number: 2,
    description: 'Provide your details and wait for booking approval.',
    title: ' Fill In Your Details',
  },
  {
    number: 3,
    description:
      'Get exclusive access to chat with potential and current roommates.',
    title: ' Meet Roommates',
  },
  {
    number: 4,
    description: 'Seal the deal and embark on your Homey living experience.',
    title: ' Make It Official',
  },
];
const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass} ref={props.ref}>
      <div className="mt-6 w-full text-left">
        <h3 className="text-2xl font-medium text-primary-pretitle sm:hidden">
          {props.preTitle}
        </h3>
        <h3 className="text-5xl font-semibold text-white sm:text-center sm:text-2xl">
          {props.addtext} {props.title}
        </h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        <div className="flex ">
          <div className="w-full sm:text-center">
            {props.sectionData &&
              props.sectionData.length > 0 &&
              props.sectionData.map((item: Bar, index) => {
                return (
                  <div className="sm:py-5" key={index}>
                    <div className="sm:w-18 mb-2 mt-8 flex h-8 w-16 items-center justify-center rounded-3xl bg-primary-pretitle text-xl font-bold text-white sm:m-auto sm:mb-5 sm:h-8 sm:rounded-2xl">
                      {item.number}
                    </div>
                    <p className="text-3xl font-semibold text-white sm:text-2xl">
                      {item.title}
                    </p>
                    <p className="pt-1 text-xl leading-normal text-white">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
          </div>

          <div className="w-full sm:hidden">
            {' '}
            {props.image && (
              <div className="w-full">
                <img
                  src={`${router.basePath}${props.image}`}
                  alt={props.imageAlt}
                  className="absolute w-1/2 2xl:-mt-44"
                />
              </div>
            )}
          </div>
        </div>

        {props.activeButton && (
          <div className="sm:flex sm:justify-center">
            <a href="https://www.instagram.com/homey_madcity/">
              <button className="mt-8 w-44 rounded-lg bg-primary-graytone p-3 text-xl text-white sm:w-52 sm:font-semibold">
                Become a Host
              </button>
            </a>
          </div>
        )}
      </div>

      <div className="m-auto my-12 flex w-[100%] justify-between lg:w-[85%] sm:my-2 sm:block">
        {props.roundNumbers && (
          <div className="dashclass absolute left-[19%] w-[63%] sm:hidden">
            .
          </div>
        )}
        {props.roundNumbers &&
          numbers.map((item, index) => {
            return (
              <div
                className="flex items-center justify-center sm:py-10"
                key={index}
              >
                <RoundNumber
                  number={item.number}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
