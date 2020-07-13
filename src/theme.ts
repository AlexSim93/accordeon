export default {
  breakpoints: ['768px', '1024px', '1440px'],
  fontSizes: {
    s: '14px',
    m: '16px',
    l: '24px',
  },
  space: {
    s: '8px',
    m: '16px',
    l: '24px',
  },
  colors: {
    white: '#FFFFFF', // title text
    blackPearlLighten48: 'rgba(8, 13, 38, 0.48)', // border
    medianGrey: '#A7A7C8', // description text
    darkGreyLighten16: 'rgba(103, 107, 139, 0.16)', // accordion bg
    neutralDarkGrey: '#C4C4C4', // icon
  },
  fonts: {
    Montserrat: '"Montserrat", sans-serif',
  },
  radii: {
    s: '4px',
  },
  borders: {
    accordion: '1px solid blackPearlLighten48',
  },
  variants: {
    primary: {
      container: {
        bg: 'darkGreyLighten16',

      },
      title: {
        color: 'white',
      },
      content: {
        color: 'medianGrey',
        border: 'accordion',
        borderRadius: 's',
      },
    },
  },
};
