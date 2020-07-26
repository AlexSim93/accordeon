import React from 'react';
import styled from 'styled-components';
import { background, BackgroundProps } from 'styled-system';
import { WorkWithOvergear } from './components/WorkWithOvergear';
import { FromNowOn } from './components/FromNowOn';
import { GetUsedTo } from './components/GetUsedTo';

import Rhombus from '../../assets/images/rhombus_big.png';

const PageContainer = styled.main<BackgroundProps>`
  background-repeat: no-repeat;
  background-size: 144px;
  ${background}
`;

export const Help = () => (
  <PageContainer
    backgroundImage={`url(${Rhombus}), url(${Rhombus}), url(${Rhombus})`}
    backgroundPosition={['calc(100vw - 72px) 80px, calc(100vw - 72px) 1120px, -72px 2513px', '-1000px -1000px', '-35px 336px, calc(100vw - 104px) 1072px, -46px 1875px']}
  >
    <WorkWithOvergear />
    <FromNowOn />
    <GetUsedTo />
  </PageContainer>
);
