import {
  typography,
  color,
  flexbox,
  TypographyProps,
  ColorProps,
  FlexboxProps,
  space,
  SpaceProps,
} from 'styled-system';
import styled from 'styled-components';

export const Text = styled.span<TypographyProps & ColorProps & FlexboxProps & SpaceProps>`
    ${typography}
    ${color}
    ${flexbox}
    ${space}
`;

Text.defaultProps = {
  fontFamily: 'Montserrat',
  color: 'white',
};

Text.displayName = 'Text';
