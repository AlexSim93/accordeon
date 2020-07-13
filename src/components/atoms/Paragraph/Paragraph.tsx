import styled from 'styled-components';
import { color, typography, space } from 'styled-system';

export const Paragraph = styled.p`
  ${space}
  ${typography}
  ${color}
`;

Paragraph.displayName = 'Paragraph';
