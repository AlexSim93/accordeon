import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from 'reflexbox';
import { Accordion } from '../../molecules/Accordion';

type Props = {
  initiallyExpanded?: number;
  content: any;
};

type AccordionRenderProps = {
  id: string;
  title: string;
  description: string;
};

export const AccordionGroup: React.FC<Props> = ({
  initiallyExpanded,
  content,
}) => {
  const [expandedIndex, changeExpandedIndex] = useState(initiallyExpanded);
  return (
    <Box as="section">
      {Array.isArray(content)
        && content.map(
          ({ id, title, description }: AccordionRenderProps, index: number) => (
            <Box key={id} mb={16}>
              <Accordion
                title={title}
                expanded={index === expandedIndex}
                onToggle={(state: boolean) => changeExpandedIndex(state ? -1 : index)}
              >
                <ReactMarkdown source={description} />
              </Accordion>
            </Box>
          ),
        )}
    </Box>
  );
};
