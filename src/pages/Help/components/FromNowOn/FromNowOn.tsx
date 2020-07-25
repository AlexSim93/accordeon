import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../../../components/atoms/Caption';
import { Paragraph } from '../../../../components/atoms/Paragraph';
import { Text } from '../../../../components/atoms/Text';
import { AccordionGroup } from '../../../../components/organisms/AccordionGroup';

const ImageContainer = styled.figure`
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
  <>
    <ImageContainer />
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
  </>
);
