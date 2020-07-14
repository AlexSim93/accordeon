import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'reflexbox';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../components/atoms/Text';
import theme from '../../theme';
import { MarkDown } from '../../components/atoms/MarkDown';
// @ts-ignore
import notes from './readme.md';

storiesOf('MarkDown', module).add(
  'MarkDown',
  () => (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column">
        <Text color="black" fontWeight="600" fontSize="xl">
          MarkDown
        </Text>
        <Box mb={24}>
          <Text color="black" fontSize="l">
            Default MarkDown
          </Text>
          <Box backgroundColor="black">
            <MarkDown>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              consectetur mollitia dicta voluptas soluta! **Accusantium**, doloremque
              neque, deleniti *temporibus eius corporis veritatis doloribus* quam
              dolorum, impeditFaperiam? Corrupti, animi eos. Lorem ipsum dolor sit
              amet, __consectetur adipisicing elit__. Corporis consectetur mollitia
              dicta voluptas soluta! Accusantium, doloremque neque, deleniti
              temporibus eius corporis veritatis doloribus quam dolorum,
              impeditFaperiam? ~~Corrupti, animi eos. Lorem ipsum dolor sit amet~~,
              consectetur adipisicing elit. Corporis consectetur mollitia dicta
              voluptas soluta! Accusantium, doloremque neque, deleniti temporibus
              eius corporis veritatis doloribus quam dolorum, impeditFaperiam?
              Corrupti, animi eos. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Corporis consectetur mollitia dicta voluptas
              soluta! Accusantium, doloremque neque, deleniti temporibus eius
              corporis veritatis doloribus quam dolorum, impeditFaperiam?
              Corrupti, animi eos.
              - point1
              - point2
            </MarkDown>
          </Box>
        </Box>
        <Box mb={24}>
          <Text color="black" fontSize="l">
            Paragraph fontSize large, color blackPearlLighten48
          </Text>
          <MarkDown color="blackPearlLighten48" fontSize="l">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            consectetur mollitia dicta voluptas soluta! **Accusantium**, doloremque
            neque, deleniti *temporibus eius corporis veritatis doloribus* quam
            dolorum, impeditFaperiam? Corrupti, animi eos. Lorem ipsum dolor sit
            amet, __consectetur adipisicing elit__. Corporis consectetur mollitia
            dicta voluptas soluta! Accusantium, doloremque neque, deleniti
            temporibus eius corporis veritatis doloribus quam dolorum,
            impeditFaperiam? ~~Corrupti, animi eos. Lorem ipsum dolor sit amet~~,
            consectetur adipisicing elit. Corporis consectetur mollitia dicta
            voluptas soluta! Accusantium, doloremque neque, deleniti temporibus
            eius corporis veritatis doloribus quam dolorum, impeditFaperiam?
            Corrupti, animi eos. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corporis consectetur mollitia dicta voluptas
            soluta! Accusantium, doloremque neque, deleniti temporibus eius
            corporis veritatis doloribus quam dolorum, impeditFaperiam?
            Corrupti, animi eos.
            - point1
            - point2
          </MarkDown>
        </Box>
      </Flex>
    </ThemeProvider>
  ),
  { notes },
);
