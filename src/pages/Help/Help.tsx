import React from 'react';
import styled from 'styled-components';
import {
  space, SpaceProps, grid, GridProps,
} from 'styled-system';
import { WorkWithOvergear } from './components/WorkWithOvergear';
import { FromNowOn } from './components/FromNowOn';
import { GetUsedTo } from './components/GetUsedTo';

const PageContainer = styled.main<SpaceProps & GridProps>`
  display: grid;
  justify-content: center;
  column-gap: 32px;
  ${space}
  ${grid}
`;

export const Help = () => (
  <PageContainer
    gridTemplateColumns={['288px', 'repeat(6, 80px)', 'repeat(12, 64px)']}
    gridTemplateAreas={[
      '"workWithOvergear" "workWithOvergearImage" "fromNowOnImage" "fromNowOnInfo" "fromNowOnAccordeon" "getUsedImg" "getUsedInfo" "getUsedAccordeon"',
      `
        "workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergearImage workWithOvergearImage" 
        "fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnInfo fromNowOnInfo fromNowOnInfo" 
        "fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon"
        "getUsedInfo getUsedInfo getUsedInfo getUsedImg getUsedImg getUsedImg"
        "getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon"
      `,
      `
        "workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergear workWithOvergearImage workWithOvergearImage workWithOvergearImage workWithOvergearImage workWithOvergearImage"
        "fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnInfo fromNowOnInfo fromNowOnInfo fromNowOnInfo fromNowOnInfo fromNowOnInfo"
        "fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnImage fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon fromNowOnAccordeon"
        "getUsedInfo getUsedInfo getUsedInfo getUsedInfo getUsedInfo getUsedInfo getUsedImg getUsedImg getUsedImg getUsedImg getUsedImg getUsedImg"
        "getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedAccordeon getUsedImg getUsedImg getUsedImg getUsedImg getUsedImg getUsedImg"
      `,
    ]}
  >
    <WorkWithOvergear />
    <FromNowOn />
    <GetUsedTo />
  </PageContainer>
);
