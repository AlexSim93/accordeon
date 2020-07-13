import React, { useState } from 'react';
import { Box } from 'reflexbox';
import { space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import { Accordion } from '../../molecules/Accordion';

type Props = {
  initiallyExpanded?: number;
  content: any;
  DescriptionComponent: any;
};

type AccordionRenderProps = {
  id: string;
  title: string;
  description: string;
};

const AccordionContainer = styled.div<SpaceProps>`
  ${space}
`;

export const AccordionGroup: React.FC<Props> = ({
  initiallyExpanded,
  content,
  DescriptionComponent,
}) => {
  const [expandedIndex, changeExpandedIndex] = useState(initiallyExpanded);
  return (
    <Box as="section">
      {Array.isArray(content)
        && content.map(
          ({ id, title, description }: AccordionRenderProps, index: number) => (
            <AccordionContainer key={id} mb="m">
              <Accordion
                title={title}
                expanded={index === expandedIndex}
                onToggle={(state: boolean) => changeExpandedIndex(state ? -1 : index)}
              >
                <DescriptionComponent>{description}</DescriptionComponent>
              </Accordion>
            </AccordionContainer>
          ),
        )}
    </Box>
  );
};
