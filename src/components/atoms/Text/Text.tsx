import {
  typography,
  color,
  flexbox,
  TypographyProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';
import styled from 'styled-components';

export const Text = styled.span<TypographyProps & ColorProps & FlexboxProps>`
    ${typography}
    ${color}
    ${flexbox}
`;

Text.defaultProps = {
  fontFamily: 'Montserrat',
  color: 'white',
};

Text.displayName = 'Text';
