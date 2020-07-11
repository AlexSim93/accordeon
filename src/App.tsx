import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Paragraph } from './components/atoms/Paragraph';
import { Accordion } from './components/molecules/Accordion';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Accordion>
        <Paragraph>AAAAAAAAAAAAAAAAAAA</Paragraph>
      </Accordion>
    </ThemeProvider>
  );
}

export default App;
