import React from 'react';
import { Box } from 'reflexbox';
import { Faq } from './containers/Faq';
import { Paragraph } from '../../components/atoms/Paragraph';

export const Help = () => (
  <Box>
    <Paragraph p="m">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet
      culpa quia commodi delectus in asperiores, facilis, repudiandae rem illum
      vero aliquid exercitationem repellendus adipisci odit beatae ipsam quidem
      minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
      quaerat iste, nobis omnis delectus quasi? Temporibus, atque? Ipsa
      blanditiis dolor accusantium, facere quo nostrum expedita excepturi
      voluptatem tempore aut eligendi?
    </Paragraph>
    <Faq />
  </Box>
);
