import React from 'react';
import styled from 'styled-components';
import { Icon, ICON_SIZE } from '../Icon';
import { Star } from '../../../assets/icons';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StarContainer = styled.div`
    margin-right: 2px;
    &:last-child {
        margin-right: 0;
    }
`;

export const Rate = ({ rate }: { rate: number }) => (
  <Container>
    {Array.from(Array(Math.floor(rate))).map(() => (
      <StarContainer><Icon type={Star} size={ICON_SIZE.s} fill="#00B67A" /></StarContainer>
    ))}
  </Container>
);
