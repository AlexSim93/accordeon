import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Faq } from './pages/Faq';
import GlobalFont from './assets/fonts/GlobalFont';
import GlobalStyles from './assets/styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Faq />
      <GlobalFont />
      <GlobalStyles bg="darkBlue" />
    </ThemeProvider>
  );
}

export default App;
