import React from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
} from 'styled-system';

export const Button = styled.button<
  SpaceProps & ColorProps & TypographyProps & BorderProps & LayoutProps
>`
    ${space}    
    ${layout}
    ${color}
    ${typography}
    ${border}
  &:hover{
    cursor: pointer;
  }
`;

Button.defaultProps = {
  color: 'white',
  backgroundColor: 'dodgerBlue',
  borderRadius: 's',
  border: '0',
  textAlign: 'center',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: 'm',
  width: '192px',
  p: 'xs',
};

Button.displayName = 'Button';
