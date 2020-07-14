import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'reflexbox';
import { ThemeProvider } from 'styled-components';
import { Divider } from '../../components/atoms/Divider';
import notes from './readme.md';
import { Text } from '../../components/atoms/Text';
import theme from '../../theme';

storiesOf('Divider', module).add('Divider', () => (
  <ThemeProvider theme={theme}>
    <Flex flexDirection="column">
      <Text color="black" fontWeight="600" fontSize="xl">Divider</Text>
      <Text color="black">height=10; bg=#080D26</Text>
      <Box>
        <Divider height={10} bg="#080D26" />
      </Box>
    </Flex>
  </ThemeProvider>
), { notes });
