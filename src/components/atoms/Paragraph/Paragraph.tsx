import styled from 'styled-components';
import { color } from 'styled-system';

export interface PropsParagraph extends React.HTMLAttributes<HTMLElement> {
    fontStyle?: any;
    size?: any;
    color?: any;
    disabled?: boolean;
  }

export const Paragraph = styled.p<PropsParagraph>`
    ${color}
`;

Paragraph.displayName = 'Paragraph';
