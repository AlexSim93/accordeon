import React from 'react';
import styled from 'styled-components';
import {
  space, SpaceProps, GridProps, grid,
} from 'styled-system';
import { Caption } from '../../../../components/atoms/Caption';
import { Paragraph } from '../../../../components/atoms/Paragraph';
import { Text } from '../../../../components/atoms/Text';
import { AccordionGroup } from '../../../../components/organisms/AccordionGroup';

import Image from '../../../../assets/images/slide3.png';

const GetUsedToContainer = styled.main<SpaceProps & GridProps>`
  display: grid;
  justify-content: center;
  column-gap: 32px;
  ${space}
  ${grid}
`;

const ImageContainer = styled.img<any>`
  grid-area: getUsedImg;
`;

const InfoContainer = styled.section`
  grid-area: getUsedInfo;
`;

const AccordeonContainer = styled.section`
  grid-area: getUsedAccordeon;
`;

const content = [
  {
    title: 'What is your commission rate?',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eum, consectetur numquam, itaque eos soluta enim magnam incidunt sed similique nam porro! Minus consequuntur nemo debitis dicta esse ratione autem.',
  },
  {
    title: 'How many orders can I get?',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eum, consectetur numquam, itaque eos soluta enim magnam incidunt sed similique nam porro! Minus consequuntur nemo debitis dicta esse ratione autem.',
  },
  {
    title: 'How can I trust you?',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eum, consectetur numquam, itaque eos soluta enim magnam incidunt sed similique nam porro! Minus consequuntur nemo debitis dicta esse ratione autem.',
  },
];

export const GetUsedTo = () => (
  <GetUsedToContainer
    gridTemplateColumns={['288px', 'repeat(6, 80px)', 'repeat(12, 64px)']}
    gridTemplateAreas={[
      '"getUsedImg" "getUsedInfo" "getUsedAccordeon"',
      `
      "getUsedInfo getUsedInfo getUsedInfo getUsedImg getUsedImg getUsedImg"
      "getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon"
    `,
      `
      "getUsedInfo getUsedInfo getUsedInfo getUsedInfo getUsedInfo getUsedInfo getUsedImg getUsedImg getUsedImg getUsedImg getUsedImg getUsedImg"
      "getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedImg getUsedImg getUsedImg getUsedImg getUsedImg getUsedImg"
    `,
    ]}
  >
    <ImageContainer width={['100%', '100%', 640]} src={Image} />
    <InfoContainer>
      <Caption mb={[8, 12, 24]} line={['none', 'none', 'left']}>
        Get used to
      </Caption>
      <Text as="h2" mb={[16, 24, 24]}>
        Stable Income Without Hassle
      </Text>
      <Paragraph mb={[24, 64, 48]} color="medianGrey">
        Do what you like, we will take care of the rest. Our platform and our
        staff will make your work smooth and easy. Just follow our simple rules
        and instructions.
      </Paragraph>
    </InfoContainer>
    <AccordeonContainer>
      <AccordionGroup
        content={content}
        initiallyExpanded={0}
        descriptionComponent={Paragraph}
        titleKey="title"
        descriptionKey="description"
      />
    </AccordeonContainer>
  </GetUsedToContainer>
);
