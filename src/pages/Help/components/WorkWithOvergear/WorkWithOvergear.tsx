import React from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  GridProps,
  grid,
  layout,
  LayoutProps,
  position,
  PositionProps,
} from 'styled-system';
import { Flex } from 'reflexbox';
import { Caption } from '../../../../components/atoms/Caption';
import { Text } from '../../../../components/atoms/Text';
import { Paragraph } from '../../../../components/atoms/Paragraph';
import { Button } from '../../../../components/atoms/Button';
import { Rate } from '../../../../components/atoms/Rate';

import Image from '../../../../assets/images/slide1.png';

const WorkWithOvergearContainer = styled.section<SpaceProps & GridProps>`
  display: grid;
  justify-content: center;
  column-gap: 32px;
  ${space}
  ${grid}
`;

const WorkWithOvergearDescription = styled.div<SpaceProps>`
  grid-area: workWithOvergear;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${space}
`;

const WorkWithOvergearImage = styled.img<LayoutProps & PositionProps & any>`
  grid-area: workWithOvergearImage;
  position: relative;
  z-index: -1;
  ${layout}
  ${position}
`;

const RateContainer = styled.div<FlexboxProps>`
  display: flex;
  ${flexbox}
`;

export const WorkWithOvergear = () => (
  <WorkWithOvergearContainer
    gridTemplateColumns={['288px', 'repeat(6, 80px)', 'repeat(12, 64px)']}
    gridTemplateAreas={[
      '"workWithOvergear" "workWithOvergearImage"',
      `
        "workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergearImage workWithOvergearImage" 
      `,
      `
        "workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergearImage workWithOvergearImage workWithOvergearImage workWithOvergearImage workWithOvergearImage"
      `,
    ]}
    mb={['m', 'l', 'xxxxl']}
  >
    <WorkWithOvergearDescription pt={['xs', 'xl', 'xxxl']}>
      <Caption
        line={['none', 'none', 'left']}
        mb={['xxxs', 'xs', 'sm']}
        alignSelf={['center', 'flex-start', 'flex-start']}
        fontSize={['xxs', 'xs', 'xs']}
      >
        work with overgear
      </Caption>
      <Text
        as="h2"
        mb={['xs', 'xs', 'sm']}
        mt={0}
        alignSelf={['center', 'flex-start', 'flex-start']}
        fontSize={['l', 'xl', 'xxxl']}
        fontWeight={['bold', 'bold', '800']}
      >
        Share your experience with gamers worldwide
      </Text>
      <Paragraph
        mb={['sm', 's', 'ml']}
        mt={0}
        textAlign={['center', 'left', 'left']}
        color="medianGrey"
        fontSize={['s', 'm', 'ml']}
        fontWeight="500"
      >
        Bring even more value to playing your favourite games, get a stable
        income, and help others achieve their goals.
      </Paragraph>
      <RateContainer
        flexDirection={['column', 'row', 'row']}
        alignSelf={['center', 'flex-start', 'flex-start']}
      >
        <Button mb={['xs', 0, 0]} mr={[0, 'sm', 'm']}>
          Apply Now
        </Button>
        <Flex
          flexDirection="column"
          alignItems={['center', 'flex-start', 'flex-start']}
        >
          <Rate rate={5} mb="xxxs" />
          <Text fontSize="xs" color="medianGrey" fontWeight="500">
            Rated 5 stars on
            {' '}
            <Text as="a" href="#" color="medianGrey">
              Trustpilot
            </Text>
          </Text>
        </Flex>
      </RateContainer>
    </WorkWithOvergearDescription>
    <WorkWithOvergearImage src={Image} width={[288, 336, 640]} left={['calc((288px - 100vw) / 2)', -132, -96]} />
  </WorkWithOvergearContainer>
);
