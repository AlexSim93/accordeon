import styled from 'styled-components';
import { Box } from 'reflexbox';
import {
  space, color, SpaceProps, ColorProps,
} from 'styled-system';

export const DescriptionContainer = styled(Box)<SpaceProps & ColorProps>`
  ${space}
  ${color}
  font-weight: 500;
`;

DescriptionContainer.displayName = 'DescriptionContainer';
