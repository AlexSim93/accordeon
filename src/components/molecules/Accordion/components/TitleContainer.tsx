import styled from 'styled-components';
import { Flex } from 'reflexbox';
import {
  space,
  typography,
  color,
  SpaceProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';

export const TitleContainer = styled(Flex)<
  SpaceProps & TypographyProps & ColorProps
>`
  ${space}
  ${typography}
  ${color}
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

TitleContainer.displayName = 'TitleContainer';
