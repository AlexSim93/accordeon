import React from 'react';
import { AccordionGroup } from '../../components/organisms/AccordionGroup';
import { useContent } from '../../utils/hooks/useContent';

export const Faq = () => {
  const { content } = useContent('faqs');
  console.log(content);
  return <div style={{ backgroundColor: '#080D26' }}><AccordionGroup content={content} initiallyExpanded={0} /></div>;
};
