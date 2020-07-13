import styled from 'styled-components';
import { color, typography, space, SpaceProps, TypographyProps, ColorProps } from 'styled-system';

export const Paragraph = styled.p<SpaceProps & TypographyProps & ColorProps>`
  ${space}
  ${typography}
  ${color}
`;

Paragraph.displayName = 'Paragraph';
