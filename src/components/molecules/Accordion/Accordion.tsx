import React, { useState, useCallback } from 'react';
import { Flex, Box } from 'reflexbox';
import noop from 'lodash/noop';
import styled from 'styled-components';
import { Chevron } from '../../../assets/icons';
import { ICON_SIZE, Icon } from '../../atoms/Icon';

type Props = {
  title: string;
  expanded?: boolean;
  initiallyExpanded?: boolean;
  onToggle?: (state: boolean) => void;
};

export interface PropsAnimatedChevron {
  shouldBeExpanded: boolean;
}

interface PropsDescription {
  shouldBeExpanded: boolean;
}

const AccordionContainer = styled(Box)`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  border-radius: 4px;
  background-color: rgba(103, 107, 139, 0.16);
`;

const AnimatedChevron = styled(Box)<PropsAnimatedChevron>`
  transform: rotate(${({ shouldBeExpanded }) => (shouldBeExpanded ? '180deg' : '360deg')});
  transform-origin: 50% 50%;
`;

const TitleContainer = styled(Flex)`
  padding: 16px;
  
  font-weight: 600;
  
  color: #FFFFFF;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled(Box)`
  margin-right: 8px;
`;

const DescriptionContainer = styled(Box)<PropsDescription>`
  display: ${({ shouldBeExpanded }) => (shouldBeExpanded ? 'block' : 'none')};
  border-top: 1px solid rgba(8, 13, 38, 0.48);
  font-weight: 500;
  color: #A7A7C8;
`;

export const Accordion: React.FC<Props> = ({
  title,
  initiallyExpanded = false,
  expanded,
  onToggle = noop,
  children,
}) => {
  const [isExpanded, toggleAccordion] = useState(initiallyExpanded);

  const handleToggleAccordion = useCallback(() => {
    toggleAccordion(!isExpanded);
    onToggle(isExpanded);
  }, [isExpanded]);

  const shouldBeExpanded = typeof expanded === 'boolean' ? expanded : isExpanded;

  return (
    <AccordionContainer>
      <TitleContainer flexDirection="row" onClick={handleToggleAccordion}>
        <Title flexGrow={1}>{title}</Title>
        <AnimatedChevron shouldBeExpanded={shouldBeExpanded}>
          <Icon
            type={Chevron}
            size={ICON_SIZE.s}
            fill="#C4C4C4"
          />
        </AnimatedChevron>
      </TitleContainer>
      <DescriptionContainer p={16} shouldBeExpanded={shouldBeExpanded}>{children}</DescriptionContainer>
    </AccordionContainer>
  );
};
