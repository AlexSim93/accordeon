import React, { useState } from 'react';
import { Box } from 'reflexbox';
import { space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import { Accordion } from '../../molecules/Accordion';

type Content = {
  id: string;
  title: string;
  description: string;
}

type Props = {
  initiallyExpanded?: number;
  content?: Content[];
  forceExpanded?: number;
  DescriptionComponent: React.FunctionComponent;
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
  forceExpanded,
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
                expanded={typeof forceExpanded === 'number' ? index === forceExpanded : index === expandedIndex}
                onToggle={() => changeExpandedIndex(index === expandedIndex ? -1 : index)}
              >
                <DescriptionComponent>{description}</DescriptionComponent>
              </Accordion>
            </AccordionContainer>
          ),
        )}
    </Box>
  );
};
