import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { space, color, typography } from 'styled-system';

export const MarkDown = styled(ReactMarkdown)`
  & > p {
    margin: 0;
    ${space}
    ${color}
    ${typography}
  }
`;
