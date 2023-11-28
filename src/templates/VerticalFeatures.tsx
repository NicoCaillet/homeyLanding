import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const sectionElements = [
  {
    title: 'Maximize Space, Maximize Earnings',
    number: '01',
    subtitle:
      'Co-living arrangements can significantly boost rental income by maximizing space utilization without extensive renovations.',
  },
  {
    title: 'Stable Income',
    number: '02',
    subtitle:
      'Consistent and reliable income through long-term, multiple-tenant arrangements, reducing vacancy rates.',
  },
  {
    title: 'Customization',
    number: '03',
    subtitle:
      'Homey can tailor co-living setups to suit different landlord preferences and property types. From 1 bedrooms to 10+ bedrooms, Homey has anyone covered.',
  },
];

const VerticalFeatures = ({ refs }) => {
  return (
    <Section
      title="Live, Lounge, Connect: Homey Co-Living"
      description="Homey is the solution for young individuals looking for comfortable and cozy living spaces
        while keeping the commodities of private space. The future is shared, join the community!"
      bg={true}
      preTitle="ABOUT US"
      multipleImage={true}
      ref={refs}
    >
      <VerticalFeatureRow
        preTitle="HOW IT WORKS"
        title="Your Journey to Co-Living "
        roundNumbers={true}
        ref={refs}
      />
      <VerticalFeatureRow
        preTitle="FOR LANDLORDS"
        title="Join us and see the benefits!"
        addtext="Landlords: "
        image="/assets/images/mountain.png"
        imageAlt="Third feature alt text"
        children={sectionElements}
        ref={refs}
      />
    </Section>
  );
};

export { VerticalFeatures };
