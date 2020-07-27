const breakpoints = ['768px', '1440px'];

export default {
  breakpoints,
  fontSizes: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    ml: '20px',
    l: '24px',
    xl: '32px',
    xxl: '40px',
    xxxl: '56px',
  },
  space: { // s 8, m 16, l 24
    xxxxs: '4px',
    xxxs: '8px',
    xxs: '12px',
    xs: '16px',
    s: '24px',
    sm: '32px',
    m: '40px',
    ml: '48px',
    l: '56px',
    xl: '64px',
    xxl: '72px',
    xxxl: '140px',
    xxxxl: '200px',
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
  },
  colors: {
    white: '#FFFFFF', // title text
    blackPearlLighten48: 'rgba(8, 13, 38, 0.48)', // border
    medianGrey: '#A7A7C8', // description text
    darkGreyLighten16: 'rgba(103, 107, 139, 0.16)', // accordion bg
    neutralDarkGrey: '#C4C4C4', // icon
    darkBlue: '#080D26', // page bg
    dodgerBlue: '#564FFF', // button bg
  },
  fonts: {
    Montserrat: '"Montserrat", sans-serif',
  },
  radii: {
    s: '4px',
  },
};
