import React, { useState, useCallback } from 'react';
import { Flex, Box } from 'reflexbox';
import noop from 'lodash/noop';
import styled from 'styled-components';
import {
  color, typography, space, border, flexbox, SpaceProps, ColorProps, FlexboxProps, TypographyProps, BorderProps,
} from 'styled-system';
import { Chevron } from '../../../assets/icons';
import { ICON_SIZE, Icon } from '../../atoms/Icon';
import { Divider } from '../../atoms/Divider';
import { Text } from '../../atoms/Text';

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

const AccordionContainer = styled(Box) <ColorProps & TypographyProps & BorderProps>`
  ${color}
  ${typography}
  ${border}
  font-style: normal;
`;

const AnimatedChevron = styled(Box) <PropsAnimatedChevron>`
  transform: rotate(
    ${({ shouldBeExpanded }) => (shouldBeExpanded ? '180deg' : '360deg')}
  );
  transition: transform 1s;
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

const DescriptionContainer = styled(Box) <SpaceProps & ColorProps & PropsDescription>`
  display: ${({ shouldBeExpanded }) => (shouldBeExpanded ? 'block' : 'none')};
  ${space}
  ${color}
  font-weight: 500;
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
  }, [isExpanded, expanded]);

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
        alignItems="center"
        onClick={handleToggleAccordion}
      >
        <Text color="white" fontSize={['s', 'm', 'm']} flexGrow={1}>
          {title}
        </Text>
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
