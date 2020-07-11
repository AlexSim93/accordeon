import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Faq } from './pages/Faq';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Faq />
    </ThemeProvider>
  );
}

export default App;
