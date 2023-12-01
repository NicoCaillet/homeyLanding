import Image from 'next/image';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';

const Footer = ({ refs }: any) => (
  <Background>
    <Section>
      <div ref={refs}>
        <CenteredFooter
          logo={
            <Image
              src="/assets/images/homey-blue.svg"
              alt=""
              className="m-auto"
              width={200}
              height={200}
              loading="lazy"
            />
          }
        ></CenteredFooter>
      </div>
    </Section>
  </Background>
);

export { Footer };
