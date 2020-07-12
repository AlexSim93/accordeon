import { createGlobalStyle } from 'styled-components';

import MontserratMedium from './Montserrat/Montserrat-Medium.ttf';
import MontserratSemiBold from './Montserrat/Montserrat-SemiBold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: Montserrat;
        src: url(${MontserratMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: Montserrat;
        src: url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
`;
