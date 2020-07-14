import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'reflexbox';
import { ThemeProvider } from 'styled-components';
import notes from './readme.md';
import { Text } from '../../components/atoms/Text';
import theme from '../../theme';

storiesOf('Text', module).add(
  'Text',
  () => (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column">
        <Text color="black" fontWeight="600" fontSize="xl">
          Text
        </Text>
        <Box mb={24}>
          <Text color="black" fontSize="l">
            Default text
          </Text>
          <Box backgroundColor="black">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              consectetur mollitia dicta voluptas soluta!
            </Text>
          </Box>
        </Box>
        <Box mb={24}>
          <Text color="black" fontSize="l">
            Text fontSize large, color blackPearlLighten48
          </Text>
          <Box>
            <Text color="blackPearlLighten48" fontSize="l">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              consectetur mollitia dicta voluptas soluta!
            </Text>
          </Box>
        </Box>
      </Flex>
    </ThemeProvider>
  ),
  { notes },
);
