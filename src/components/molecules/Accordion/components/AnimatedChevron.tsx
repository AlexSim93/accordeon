import { Box } from "reflexbox";
import styled from "styled-components";

interface PropsAnimatedChevron {
  shouldBeExpanded: boolean;
}

export const AnimatedChevron = styled(Box)<PropsAnimatedChevron>`
  transform: rotate(
    ${({ shouldBeExpanded }) => (shouldBeExpanded ? "180deg" : "360deg")}
  );
  transition: transform 0.2s;
`;
