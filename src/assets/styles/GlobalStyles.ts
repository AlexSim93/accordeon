import { createGlobalStyle } from 'styled-components';
import { color } from 'styled-system';

export default createGlobalStyle`
    body {
        ${color}
        margin: 0;
    }
`;
