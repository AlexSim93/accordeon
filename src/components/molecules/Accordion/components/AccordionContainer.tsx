import styled from "styled-components";
import { Box } from "reflexbox";
import { ColorProps, TypographyProps, BorderProps, color, typography, border } from "styled-system";

export const AccordionContainer = styled(Box)<
  ColorProps & TypographyProps & BorderProps
>`
  ${color}
  ${typography}
  ${border}
  font-style: normal;
`;