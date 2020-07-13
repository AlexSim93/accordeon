import React, { useState, useCallback } from 'react';
import { Flex, Box } from 'reflexbox';
import noop from 'lodash/noop';
import styled from 'styled-components';
import {
  color, typography, space, border, flexbox, SpaceProps, ColorProps, FlexboxProps, 
} from 'styled-system';
import { Chevron } from '../../../assets/icons';
import { ICON_SIZE, Icon } from '../../atoms/Icon';
import { Divider } from '../../atoms/Divider';

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

const AccordionContainer = styled(Box)<any>`
  ${color}
  ${typography}
  ${border}
  font-style: normal;
`;

const AnimatedChevron = styled(Box)<PropsAnimatedChevron>`
  transform: rotate(
    ${({ shouldBeExpanded }) => (shouldBeExpanded ? '180deg' : '360deg')}
  );
  transform-origin: 50% 50%;
`;

const TitleContainer = styled(Flex)`
  ${space}
  ${typography}
  ${color}
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

const DescriptionContainer = styled(Box)<SpaceProps & ColorProps & {shouldBeExpanded: boolean}>`
  display: ${({ shouldBeExpanded }) => (shouldBeExpanded ? 'block' : 'none')};
  ${space}
  ${color}
  font-weight: 500;
`;

const StyledTitle = styled.div<SpaceProps & ColorProps & FlexboxProps>`
  ${space}
  ${color}
  ${flexbox}
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
    <AccordionContainer
      bg="darkGreyLighten16"
      fontFamily="Montserrat"
      borderRadius="s"
    >
      <TitleContainer
        p="m"
        flexDirection="row"
        fontSize={['s', 'm', 'm']}
        onClick={handleToggleAccordion}
      >
        <StyledTitle color="white" mr="s" flexGrow={1}>
          {title}
        </StyledTitle>
        <AnimatedChevron shouldBeExpanded={shouldBeExpanded}>
          <Icon type={Chevron} size={ICON_SIZE.s} fill="#C4C4C4" />
        </AnimatedChevron>
      </TitleContainer>
      {shouldBeExpanded && <Divider height={1} bg="blackPearlLighten48" />}
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
