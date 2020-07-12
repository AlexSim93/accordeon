import React, { useState, useCallback } from 'react';
import { Flex, Box } from 'reflexbox';
import noop from 'lodash/noop';
import styled from 'styled-components';
import { Chevron } from '../../../assets/icons';
import { ICON_SIZE, Icon } from '../../atoms/Icon';

const COLLAPSE_DURATION = 0.3;

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

const AnimatedChevron = styled(Box)<PropsAnimatedChevron>`
  transform: rotate(${({ shouldBeExpanded }) => (shouldBeExpanded ? '180deg' : '360deg')});
  transition: transform ${COLLAPSE_DURATION}s;
`;

const TitleContainer = styled(Flex)`
  padding: 16px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
`;

const Title = styled(Box)`
  margin-right: 8px;
`;

const DescriptionContainer = styled(Box)<PropsDescription>`
  transform: scaleY(${({ shouldBeExpanded }) => (shouldBeExpanded ? 1 : 0)});
  transition: transform ${COLLAPSE_DURATION}s;
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
    <Box>
      <TitleContainer flexDirection="row" onClick={handleToggleAccordion}>
        <Title flexGrow={1}>{title}</Title>
        <AnimatedChevron shouldBeExpanded={shouldBeExpanded}>
          <Icon
            type={Chevron}
            size={ICON_SIZE.s}
          />
        </AnimatedChevron>
      </TitleContainer>
      <DescriptionContainer shouldBeExpanded={shouldBeExpanded}>{children}</DescriptionContainer>
    </Box>
  );
};
