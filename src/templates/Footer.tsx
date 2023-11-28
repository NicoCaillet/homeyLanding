import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';

const Footer = ({ refs }) => (
  <Background>
    <Section>
      <div ref={refs}>
        <CenteredFooter
          logo={<img className="m-auto" src="/assets/images/homey-blue.svg" />}
        ></CenteredFooter>
      </div>
    </Section>
  </Background>
);

export { Footer };
