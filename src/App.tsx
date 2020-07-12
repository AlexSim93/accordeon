import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Faq } from './pages/Faq';
import GlobalFont from './assets/fonts/GlobalFont';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <Faq />
    </ThemeProvider>
  );
}

export default App;
