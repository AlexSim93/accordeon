import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'reflexbox';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../components/atoms/Text';
import theme from '../../theme';
import { Accordion } from '../../components/molecules/Accordion';
// @ts-ignore
import notes from './readme.md';
import { Paragraph } from '../../components/atoms/Paragraph';

storiesOf('Accordion', module).add(
  'Accordion',
  () => {
    const [isExpanded, changeState] = useState(false);
    return (
      <ThemeProvider theme={theme}>
        <Flex flexDirection="column">
          <Text color="black" fontWeight="600" fontSize="xl">
            Accordion
          </Text>
          <Box mb={24}>
            <Text color="black" fontSize="l">
              Accordion
            </Text>
            <Accordion title="simple accordion">
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                fugiat possimus commodi veritatis recusandae esse magni, odit
                iusto ipsa quaerat voluptate deserunt aspernatur officia amet
                repudiandae, perferendis similique repellendus minus.
              </Paragraph>
            </Accordion>
          </Box>
          <Box mb={24}>
            <Text color="black" fontSize="l">
              Accordion initially expanded
            </Text>
            <Accordion title="simple accordion" initiallyExpanded>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                fugiat possimus commodi veritatis recusandae esse magni, odit
                iusto ipsa quaerat voluptate deserunt aspernatur officia amet
                repudiandae, perferendis similique repellendus minus.
              </Paragraph>
            </Accordion>
          </Box>
          <Box mb={24}>
            <Text color="black" fontSize="l">
              Accordion with external control
            </Text>
            <Box py={16}>
              <button type="button" onClick={() => changeState(true)}>Expand</button>
              <button type="button" onClick={() => changeState(false)}>Collapse</button>
            </Box>
            <Accordion title="simple accordion" expanded={isExpanded}>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                fugiat possimus commodi veritatis recusandae esse magni, odit
                iusto ipsa quaerat voluptate deserunt aspernatur officia amet
                repudiandae, perferendis similique repellendus minus.
              </Paragraph>
            </Accordion>
          </Box>
        </Flex>
      </ThemeProvider>
    );
  },
  { notes },
);
