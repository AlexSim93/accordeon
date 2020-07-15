import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { AccordionGroup } from '../../components/organisms/AccordionGroup';
import { useContent } from '../../utils/hooks/useContent';
import { MarkDown } from '../../components/atoms/MarkDown';

const AccordionGroupContainer = styled.div<SpaceProps>`
  ${space}
`;

export const Faq = () => {
  const { content } = useContent('faqs');
  return (
    <AccordionGroupContainer p="m">
      <AccordionGroup
        content={content}
        initiallyExpanded={0}
        DescriptionComponent={MarkDown}
        titleKey="title"
        descriptionKey="description"
      />
    </AccordionGroupContainer>
  );
};
