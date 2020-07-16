import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'reflexbox';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../components/atoms/Text';
import theme from '../../theme';
// @ts-ignore
import notes from './readme.md';
import { Paragraph } from '../../components/atoms/Paragraph';
import { AccordionGroup } from '../../components/organisms/AccordionGroup';

storiesOf('Accordion Group', module).add(
  'Accordion Group',
  () => {
    const [openedIndex, changeState] = useState(0);
    return (
      <ThemeProvider theme={theme}>
        <Flex flexDirection="column">
          <Text color="black" fontWeight="600" fontSize="xl">
            Accordion Group
          </Text>
          <Box mb={24}>
            <Text color="black" fontSize="l">
              Accordion Group
            </Text>
            <AccordionGroup
              content={[
                { id: '1', title: 'accordion 1', description: 'description 1' },
                { id: '2', title: 'accordion 2', description: 'description 2' },
              ]}
              descriptionComponent={Paragraph}
              titleKey="title"
              descriptionKey="description"
            />
          </Box>
          <Box mb={24}>
            <Text color="black" fontSize="l">
              Accordion Group initially expanded second accordion
            </Text>
            <AccordionGroup
              titleKey="title"
              descriptionKey="description"
              content={[
                { id: '1', title: 'accordion 1', description: 'description 1' },
                { id: '2', title: 'accordion 2', description: 'description 2' },
              ]}
              initiallyExpanded={1}
              descriptionComponent={Paragraph}
            />
          </Box>
          <Box mb={24}>
            <Text color="black" fontSize="l">
              Accordion Group with external control
            </Text>
            <Box py={16}>
              <button type="button" onClick={() => changeState(0)}>
                Expand 1
              </button>
              <button type="button" onClick={() => changeState(1)}>
                Expand 2
              </button>
              <button type="button" onClick={() => changeState(-1)}>
                Close
              </button>
            </Box>
            <AccordionGroup
              titleKey="title"
              descriptionKey="description"
              content={[
                { id: '1', title: 'accordion 1', description: 'description 1' },
                { id: '2', title: 'accordion 2', description: 'description 2' },
              ]}
              forceExpanded={openedIndex}
              descriptionComponent={Paragraph}
            />
          </Box>
        </Flex>
      </ThemeProvider>
    );
  },
  { notes },
);
