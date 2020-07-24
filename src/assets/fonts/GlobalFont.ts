import { createGlobalStyle } from 'styled-components';

import MontserratMedium from './Montserrat/Montserrat-Medium.ttf';
import MontserratSemiBold from './Montserrat/Montserrat-SemiBold.ttf';
import MontserratBold from './Montserrat/Montserrat-Bold.ttf';
import MontserratExtraBold from './Montserrat/Montserrat-ExtraBold.ttf';

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
    @font-face {
        font-family: Montserrat;
        src: url(${MontserratBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: Montserrat;
        src: url(${MontserratExtraBold}) format('truetype');
        font-weight: 800;
        font-style: normal;
    }
`;
