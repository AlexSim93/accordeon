import React from 'react';
import styled from 'styled-components';
import {
  SpaceProps,
  GridProps,
  grid,
  space,
  position,
  layout,
  LayoutProps,
  PositionProps,
} from 'styled-system';
import { Caption } from '../../../../components/atoms/Caption';
import { Paragraph } from '../../../../components/atoms/Paragraph';
import { Text } from '../../../../components/atoms/Text';
import { AccordionGroup } from '../../../../components/organisms/AccordionGroup';

import Image from '../../../../assets/images/slide2.png';

const FromNowOnContainer = styled.section<SpaceProps & GridProps>`
  display: grid;
  justify-content: center;
  column-gap: 32px;
  ${space}
  ${grid}
`;

const ImageContainer = styled.img<PositionProps & LayoutProps & any>`
  grid-area: fromNowOnImage;
  position: relative;
  z-index: -1;
  ${position}
  ${layout}
  ${space}
`;

const InfoContainer = styled.section`
  grid-area: fromNowOnInfo;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AccordeonContainer = styled.div`
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
    mb={['l', 'xxl', 'xxxxl']}
  >
    <ImageContainer
      mx={['auto', 0, 0]}
      width={[263, 360, 752]}
      left={[0, '-32px', -100]}
      src={Image}
    />
    <InfoContainer>
      <Caption
        mb={['xxxs', 'xxs', 's']}
        fontSize={['xxs', 'xs', 'xs']}
        line={['none', 'none', 'left']}
      >
        From now on
      </Caption>
      <Text
        as="h2"
        fontSize={['l', 'xl', 'xxl']}
        fontWeight="bold"
        mb={['xs', 's', 's']}
        mt={0}
      >
        Play Your Favorite Games and Get Paid for it
      </Text>
      <Paragraph
        mb={['s', 'xl', 'ml']}
        fontSize={['s', 'm', 'm']}
        mt={0}
        color="medianGrey"
      >
        This is a dream remote job unlike any other. Take an order, do your best
        and complete the order &mdash; profit!
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
