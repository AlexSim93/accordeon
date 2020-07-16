import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Help } from './pages/Help';
import GlobalFont from './assets/fonts/GlobalFont';
import GlobalStyles from './assets/styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Help />
      <GlobalFont />
      <GlobalStyles bg="darkBlue" />
    </ThemeProvider>
  );
}

export default App;
