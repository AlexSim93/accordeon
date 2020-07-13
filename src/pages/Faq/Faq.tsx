import React from 'react';
import { AccordionGroup } from '../../components/organisms/AccordionGroup';
import { useContent } from '../../utils/hooks/useContent';
import { MarkDown } from '../../components/atoms/MarkDown';

export const Faq = () => {
  const { content } = useContent('faqs');
  return <div style={{ backgroundColor: '#080D26' }}><AccordionGroup content={content} initiallyExpanded={0} DescriptionComponent={MarkDown} /></div>;
};
