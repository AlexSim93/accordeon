import React, { useState } from 'react';
import { Box } from 'reflexbox';
import { space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import { Accordion } from '../../molecules/Accordion';
import { Paragraph } from '../../atoms/Paragraph';

type Content = {
  [key: string]: string;
};

type Props = {
  initiallyExpanded?: number;
  content?: Content[];
  forceExpanded?: number;
  DescriptionComponent?: React.FunctionComponent;
  titleKey: string;
  descriptionKey: string;
};

const AccordionContainer = styled.div<SpaceProps>`
  ${space}
`;

export const AccordionGroup: React.FC<Props> = ({
  initiallyExpanded = -1,
  forceExpanded,
  content,
  DescriptionComponent = Paragraph,
  titleKey,
  descriptionKey,
}) => {
  const [expandedIndex, changeExpandedIndex] = useState<number>(initiallyExpanded);
  return (
    <Box as="section">
      {Array.isArray(content)
        && content.map(
          (item: Content, index: number) => (
            <AccordionContainer key={item.id} mb="m">
              <Accordion
                title={item[titleKey]}
                expanded={typeof forceExpanded === 'number' ? index === forceExpanded : index === expandedIndex}
                onToggle={() => changeExpandedIndex(index === expandedIndex ? -1 : index)}
              >
                <DescriptionComponent>{item[descriptionKey]}</DescriptionComponent>
              </Accordion>
            </AccordionContainer>
          ),
        )}
    </Box>
  );
};
