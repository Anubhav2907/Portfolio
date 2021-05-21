import React from 'react';
import { MdDesktopMac, MdCode, MdVideocam } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="UI/UX design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            dangerouslySetInnerHTML
            desc="High performance website with blazing fast speed using MERN Stack."
          />
          <ServicesSectionItem
            icon={<MdVideocam />}
            title="VFX Design"
            desc="Photoreal, digitally-generated imagery with eye catching effects. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
