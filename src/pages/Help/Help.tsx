import React from 'react';
import { Box } from 'reflexbox';
import { Faq } from './containers/Faq';
import { Paragraph } from '../../components/atoms/Paragraph';
import { Button } from '../../components/atoms/Button';
import { Caption } from '../../components/atoms/Caption';
import { Rate } from '../../components/atoms/Rate';

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
    <Button
      py={16}
      px={16}
      color="white"
      backgroundColor="dodgerBlue"
      borderRadius="s"
      border="0"
      textAlign="center"
      fontFamily="Montserrat"
      fontWeight="bold"
      fontSize="m"
      width={192}
    >
      Apply Now
    </Button>
    <Caption color="dodgerBlue" fontSize="xs" line="left" fontWeight="bold" fontFamily="Montserrat">work with overgear</Caption>
    <Rate rate={5} />
    <Faq />
  </Box>
);
