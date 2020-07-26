import React from 'react';
import styled from 'styled-components';
import {
  SpaceProps, GridProps, grid, space,
} from 'styled-system';
import { Caption } from '../../../../components/atoms/Caption';
import { Paragraph } from '../../../../components/atoms/Paragraph';
import { Text } from '../../../../components/atoms/Text';
import { AccordionGroup } from '../../../../components/organisms/AccordionGroup';

import Image from '../../../../assets/images/slide2.png';

const FromNowOnContainer = styled.main<SpaceProps & GridProps>`
  display: grid;
  justify-content: center;
  column-gap: 32px;
  ${space}
  ${grid}
`;

const ImageContainer = styled.img<any>`
  grid-area: fromNowOnImage;
`;

const InfoContainer = styled.section`
  grid-area: fromNowOnInfo;
`;

const AccordeonContainer = styled.section`
  grid-area: fromNowOnAccordeon;
`;

const content = [
  {
    title: 'How and when do I get the money?',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eum, consectetur numquam, itaque eos soluta enim magnam incidunt sed similique nam porro! Minus consequuntur nemo debitis dicta esse ratione autem.',
  },
  {
    title: 'What is the work schedule?',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eum, consectetur numquam, itaque eos soluta enim magnam incidunt sed similique nam porro! Minus consequuntur nemo debitis dicta esse ratione autem.',
  },
  {
    title: 'Am I protected against fraud and unfair refunds',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eum, consectetur numquam, itaque eos soluta enim magnam incidunt sed similique nam porro! Minus consequuntur nemo debitis dicta esse ratione autem.',
  },
];

export const FromNowOn = () => (
  <FromNowOnContainer
    gridTemplateColumns={['288px', 'repeat(6, 80px)', 'repeat(12, 64px)']}
    gridTemplateAreas={[
      '"fromNowOnImage" "fromNowOnInfo" "fromNowOnAccordeon"',
      `
        "fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnInfo fromNowOnInfo fromNowOnInfo" 
        "fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon"
      `,
      `
        "fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnInfo fromNowOnInfo fromNowOnInfo fromNowOnInfo fromNowOnInfo fromNowOnInfo"
        "fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon"
      `,
    ]}
    mb={[56, 72, 200]}
  >
    <ImageContainer width={['100%', '100%', 640]} src={Image} />
    <InfoContainer>
      <Caption mb={[8, 12, 24]} line={['none', 'none', 'left']}>From now on</Caption>
      <Text as="h2" mb={[16, 24, 24]}>Play your favourite Games and Get Paid for it</Text>
      <Paragraph mb={[24, 64, 48]} color="medianGrey">
        This is a dream remote job unlike any other. Take an order, do your best
        and complete the order - profit!
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
  </FromNowOnContainer>
);
