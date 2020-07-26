import React, { useState, useCallback } from 'react';
import noop from 'lodash/noop';
import { Chevron } from '../../../assets/icons';
import { ICON_SIZE, Icon } from '../../atoms/Icon';
import { Divider } from '../../atoms/Divider';
import { Text } from '../../atoms/Text';
import { AccordionContainer } from './components/AccordionContainer';
import { TitleContainer } from './components/TitleContainer';
import { DescriptionContainer } from './components/DecriptionContainer';
import { AnimatedChevron } from './components/AnimatedChevron';

type Props = {
  title: string;
  expanded?: boolean;
  initiallyExpanded?: boolean;
  onToggle?: (state: boolean) => void;
};

export const Accordion: React.FC<Props> = ({
  title,
  initiallyExpanded = false,
  expanded,
  onToggle = noop,
  children,
}) => {
  const [isExpanded, toggleAccordion] = useState<boolean>(initiallyExpanded);

  const handleToggleAccordion = useCallback(() => {
    toggleAccordion(!isExpanded);
    onToggle(isExpanded);
  }, [isExpanded, onToggle]);

  const shouldBeExpanded = typeof expanded === 'boolean' ? expanded : isExpanded;

  return (
    <AccordionContainer
      bg="darkGreyLighten16"
      fontFamily="Montserrat"
      borderRadius="s"
    >
      <TitleContainer
        p="xs"
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
      {shouldBeExpanded && (
        <DescriptionContainer
          color="medianGrey"
          px="xs"
          pt="xs"
          pb={['xs', 's', 's']}
        >
          {children}
        </DescriptionContainer>
      )}
    </AccordionContainer>
  );
};
