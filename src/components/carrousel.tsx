import { Carousel } from 'flowbite-react';

function Component() {
  return (
    <div className="h-22 xl:h-34 sm:h-64 2xl:h-24">
      <Carousel leftControl="left" rightControl="right">
        <img src="/assets/images/living.svg" alt="..." />
        <img src="/assets/images/living.svg" alt="..." />
        <img src="/assets/images/living.svg" alt="..." />
      </Carousel>
    </div>
  );
}

export { Component };
