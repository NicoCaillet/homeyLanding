import type { ReactNode } from 'react';

type ISectionProps = {
  preTitle?: string;
  title?: string;
  description?: string;
  yPadding?: string;
  bg?: boolean;
  children: ReactNode;
  multipleImage?: boolean;
  ref?: any;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto px-3 ${props.yPadding ? props.yPadding : 'py-16'} ${
      props.bg && "bg-[url('/assets/images/bg-flag.png')]"
    }`}
    ref={props.ref}
  >
    <div className="m-[auto] max-w-[85%]">
      {props.preTitle && (
        <div>
          {' '}
          <h1 className="text-2xl font-medium text-primary-pretitle sm:hidden">
            {props.preTitle}
          </h1>{' '}
        </div>
      )}
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-left text-4xl font-semibold text-white sm:text-center sm:text-2xl">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 text-left text-2xl text-white sm:hidden">
              {props.description}
            </div>
          )}
        </div>
      )}
      {props.multipleImage && (
        <div className="mb-12 text-center ">
          <img
            src="/assets/images/fotosss.png"
            alt="Imagen 1"
            className="m-auto w-[90%] sm:hidden"
          />
          <div className="-mt-12 flex items-baseline justify-between sm:block">
            <div className="column text-white">
              <div className="m-auto mt-8 w-[80%]">
                <img
                  src="/assets/images/clock.png"
                  className="hidden sm:block"
                  alt=""
                />
                <h2 className="mb-4 text-2xl font-semibold">Flexibility</h2>
                <p className="text-lg">
                  Homey offers adaptable leasing options for dynamic lifestyles.
                  Avoid expensive agency fees!
                </p>
              </div>
            </div>

            <div className="column text-white ">
              <div className="m-auto mt-8 w-[80%]">
                <img
                  src="/assets/images/couch.png"
                  className="hidden sm:block"
                  alt=""
                />

                <h2 className="mb-4 text-2xl font-semibold">
                  Comfort & Design{' '}
                </h2>
                <p className="text-lg">
                  Professionally designed living spaces, complete with amenities
                  that enhance community living.
                </p>
              </div>
            </div>

            <div className="column text-white">
              <div className="m-auto mt-8 w-[80%]">
                <img
                  src="/assets/images/chat.png"
                  className="hidden sm:block"
                  alt=""
                />

                <h2 className="mb-4 text-2xl font-semibold">
                  Community Living
                </h2>
                <p className="text-lg">
                  {' '}
                  Connect, share, and thrive with like-minded individuals in a
                  collaborative living environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {props.children}
    </div>
  </div>
);

export { Section };
