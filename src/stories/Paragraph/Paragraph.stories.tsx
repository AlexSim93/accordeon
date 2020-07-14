import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'reflexbox';
import { ThemeProvider } from 'styled-components';
import { Paragraph } from '../../components/atoms/Paragraph';
import notes from './readme.md';
import { Text } from '../../components/atoms/Text';
import theme from '../../theme';

storiesOf('Paragraph', module).add(
  'Paragraph',
  () => (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column">
        <Text color="black" fontWeight="600" fontSize="xl">
          Paragraph
        </Text>
        <Box mb={24}>
          <Text color="black" fontSize="l">
            Default paragraph
          </Text>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            consectetur mollitia dicta voluptas soluta! Accusantium, doloremque
            neque, deleniti temporibus eius corporis veritatis doloribus quam
            dolorum, impeditFaperiam? Corrupti, animi eos. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Corporis consectetur mollitia
            dicta voluptas soluta! Accusantium, doloremque neque, deleniti
            temporibus eius corporis veritatis doloribus quam dolorum,
            impeditFaperiam? Corrupti, animi eos. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Corporis consectetur mollitia dicta
            voluptas soluta! Accusantium, doloremque neque, deleniti temporibus
            eius corporis veritatis doloribus quam dolorum, impeditFaperiam?
            Corrupti, animi eos. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corporis consectetur mollitia dicta voluptas
            soluta! Accusantium, doloremque neque, deleniti temporibus eius
            corporis veritatis doloribus quam dolorum, impeditFaperiam?
            Corrupti, animi eos.
          </Paragraph>
        </Box>
        <Box mb={24}>
          <Text color="black" fontSize="l">
            Paragraph fontSize large, color blackPearlLighten48
          </Text>
          <Paragraph color="blackPearlLighten48" fontSize="l">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            consectetur mollitia dicta voluptas soluta! Accusantium, doloremque
            neque, deleniti temporibus eius corporis veritatis doloribus quam
            dolorum, impedit aperiam? Corrupti, animi eos.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Corporis consectetur mollitia
            dicta voluptas soluta! Accusantium, doloremque neque, deleniti
            temporibus eius corporis veritatis doloribus quam dolorum,
            impeditFaperiam? Corrupti, animi eos.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Corporis consectetur mollitia dicta
            voluptas soluta! Accusantium, doloremque neque, deleniti temporibus
            eius corporis veritatis doloribus quam dolorum, impeditFaperiam?
            Corrupti, animi eos.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corporis consectetur mollitia dicta voluptas
            soluta! Accusantium, doloremque neque, deleniti temporibus eius
            corporis veritatis doloribus quam dolorum, impeditFaperiam?
            Corrupti, animi eos.
          </Paragraph>
        </Box>
      </Flex>
    </ThemeProvider>
  ),
  { notes },
);
