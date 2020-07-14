import React from "react";
import renderer from "react-test-renderer";
import { Text } from "./Text";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

describe("Text renders correctly", () => {
  test("Text renders correctly color=white and fontFamily=Montserrat", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Text color="white" fontFamily="Montserrat" />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
