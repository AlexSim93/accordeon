import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import {
  space, color, typography, SpaceProps, ColorProps, TypographyProps,
} from 'styled-system';

export const MarkDown = styled(ReactMarkdown)<SpaceProps & ColorProps & TypographyProps>`
  & > p {
    margin: 0;
    ${space}
    ${color}
    ${typography}
  }
`;

MarkDown.defaultProps = {
  fontFamily: 'Montserrat',
  color: 'white',
};

MarkDown.displayName = 'MarkDown';
