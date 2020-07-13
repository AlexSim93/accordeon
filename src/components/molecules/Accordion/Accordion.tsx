import React, { useState, useCallback } from 'react';
import { Flex, Box } from 'reflexbox';
import noop from 'lodash/noop';
import styled from 'styled-components';
import { color, typography, space } from 'styled-system';
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
  ${typography}
  font-style: normal;
  border-radius: 4px;
  background-color: rgba(103, 107, 139, 0.16);
`;

const AnimatedChevron = styled(Box)<PropsAnimatedChevron>`
  transform: rotate(
    ${({ shouldBeExpanded }) => (shouldBeExpanded ? '180deg' : '360deg')}
  );
  transform-origin: 50% 50%;
  color: #c4c4c4;
`;

const TitleContainer = styled(Flex)`
  ${space}
  ${typography}
  ${color}
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
  ${color}
  ${space}
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
    <AccordionContainer bg="darkGreyLighten16" fontFamily="Montserrat">
      <TitleContainer
        p="m"
        flexDirection="row"
        fontSize={['s', 'm', 'm']}
        onClick={handleToggleAccordion}
      >
        <Title color="white" flexGrow={1}>
          {title}
        </Title>
        <AnimatedChevron shouldBeExpanded={shouldBeExpanded}>
          <Icon type={Chevron} size={ICON_SIZE.s} fill="#C4C4C4" />
        </AnimatedChevron>
      </TitleContainer>
      <DescriptionContainer
        color="medianGrey"
        px="m"
        pt="m"
        pb={['m', 'l', 'l']}
        shouldBeExpanded={shouldBeExpanded}
      >
        {children}
      </DescriptionContainer>
    </AccordionContainer>
  );
};
