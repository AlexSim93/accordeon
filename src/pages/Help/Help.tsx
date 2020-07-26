import React from 'react';
import { Box } from 'reflexbox';
import { WorkWithOvergear } from './components/WorkWithOvergear';
import { FromNowOn } from './components/FromNowOn';
import { GetUsedTo } from './components/GetUsedTo';

export const Help = () => (
  <Box>
    <WorkWithOvergear />
    <FromNowOn />
    <GetUsedTo />
  </Box>
);
