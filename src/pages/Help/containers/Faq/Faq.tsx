import React from 'react';
import { AccordionGroupContainer } from '../../components/AccordionGroupContainer';
import { MarkDown } from '../../../../components/atoms/MarkDown';
import { useContent } from '../../../../utils/hooks';
import { AccordionGroup } from '../../../../components/organisms/AccordionGroup';

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
