import React, { useState } from 'react';
import { Box } from 'reflexbox';
import { Accordion } from '../../molecules/Accordion';

type Props = {
  initiallyExpanded?: number;
  data: any;
};

export const AccordionGroup: React.FC<Props> = ({
  initiallyExpanded,
  data,
}) => {
  const [expandedIndex, changeExpandedIndex] = useState(initiallyExpanded);
  return (
    <Box as="section">
      <ul>
        {data
          && data.map(
            (
              { title, Content }: any,
              index: number,
            ) => (
              <Accordion
                title={title}
                expanded={expandedIndex === index}
                onToggle={() => changeExpandedIndex(index)}
              >
                <Content />
              </Accordion>
            ),
          )}
      </ul>
    </Box>
  );
};
