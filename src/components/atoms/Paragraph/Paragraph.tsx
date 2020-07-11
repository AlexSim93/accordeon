import styled from 'styled-components';

export interface PropsParagraph extends React.HTMLAttributes<HTMLElement> {
    fontStyle?: any;
    size?: any;
    color?: any;
    disabled?: boolean;
  }

export const Paragraph = styled.p<PropsParagraph>`
    color: red;
`;

Paragraph.displayName = 'Paragraph';
