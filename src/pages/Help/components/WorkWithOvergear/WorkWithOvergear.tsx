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

const WorkWithOvergearContainer = styled.main<SpaceProps & GridProps>`
  display: grid;
  justify-content: center;
  column-gap: 32px;
  ${space}
  ${grid}
`;

const WorkWithOvergearDescription = styled.section<SpaceProps>`
  grid-area: workWithOvergear;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${space}
`;

const WorkWithOvergearImage = styled.img<LayoutProps & PositionProps & any>`
  grid-area: workWithOvergearImage;
  position: relative;
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
    mb={[40, 52, 200]}
  >
    <WorkWithOvergearDescription pt={[16, 64, 140]}>
      <Caption
        line={['none', 'none', 'left']}
        mb={[8, 16, 32]}
        alignSelf={['center', 'flex-start', 'flex-start']}
      >
        work with overgear
      </Caption>
      <Text
        as="h2"
        mb={[16, 16, 32]}
        alignSelf={['center', 'flex-start', 'flex-start']}
      >
        Share your experience with gamers worldwide
      </Text>
      <Paragraph
        mb={[32, 24, 48]}
        textAlign={['center', 'left', 'left']}
        color="medianGrey"
      >
        Bring even more value to playing your favourite games, get a stable
        income, and help others achieve their goals.
      </Paragraph>
      <RateContainer
        flexDirection={['column', 'row', 'row']}
        alignSelf={['center', 'flex-start', 'flex-start']}
      >
        <Button mb={[16, 0, 0]} mr={[0, 32, 40]}>
          Apply Now
        </Button>
        <Flex
          flexDirection="column"
          alignItems={['center', 'flex-start', 'flex-start']}
        >
          <Rate rate={5} mb={8} />
          <Text fontSize={12} color="medianGrey">
            Rated 5 stars on
            {' '}
            <Text as="a" href="#" color="medianGrey">
              Trustpilot
            </Text>
          </Text>
        </Flex>
      </RateContainer>
    </WorkWithOvergearDescription>
    <WorkWithOvergearImage src={Image} width={['100%', '100%', 640]} />
  </WorkWithOvergearContainer>
);
