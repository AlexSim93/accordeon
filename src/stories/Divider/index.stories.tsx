import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'reflexbox';
import { Divider } from '../../components/atoms/Divider';
import notes from './readme.md';

storiesOf('Divider', module).add('Divider', () => (
  <Box>
    <Box>Divider</Box>
    <Box>height=10; bg=#080D26</Box>
    <Box>
      <Divider height={10} bg="#080D26" />
    </Box>
  </Box>
)).addParameters({ notes });
