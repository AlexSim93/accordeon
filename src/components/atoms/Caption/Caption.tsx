import React from 'react';
import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
} from 'styled-system';
import styled from 'styled-components';

type Line = 'none' | 'both' | 'right' | 'left';

export const Caption = styled.span<
  ColorProps &
    TypographyProps &
    SpaceProps &
    FlexboxProps & { line: Array<Line> | Line}
>`
    &::before {
      display: ${({ line }) => (line[0] === 'left' || line[0] === 'both' ? 'inline-block' : 'none')};
      ${({ theme }) => theme.mediaQueries.small}{
        display: ${({ line }) => (line[1] === 'left' || line[1] === 'both' ? 'inline-block' : 'none')};
      }
      ${({ theme }) => theme.mediaQueries.medium}{
        display: ${({ line }) => (line[2] === 'left' || line[2] === 'both' ? 'inline-block' : 'none')};
      }
        
        content: '';
        margin-right: 24px;
        vertical-align: middle;
        height: 2px;
        width: 40px;
        background-color: #564FFF;
    }
    &::after {
        width: 40px;
        display: ${({ line }) => (line[0] === 'right' || line[0] === 'both' ? 'inline-block' : 'none')};

        ${({ theme }) => theme.mediaQueries.small}{
          display: ${({ line }) => (line[1] === 'right' || line[1] === 'both' ? 'inline-block' : 'none')};
        }
        ${({ theme }) => theme.mediaQueries.medium}{
          display: ${({ line }) => (line[2] === 'right' || line[2] === 'both' ? 'inline-block' : 'none')};
        }
        content: '';
        margin-left: 24px;
        vertical-align: middle;
        height: 2px;
        background-color: #564FFF;
    }
    text-transform: uppercase;
    ${color}
    ${typography}
    ${space}
    ${flexbox}
`;

Caption.defaultProps = {
  fontFamily: 'Montserrat',
  color: 'dodgerBlue',
  fontSize: 'xs',
  fontWeight: 'bold',
};

Caption.displayName = 'Caption';
