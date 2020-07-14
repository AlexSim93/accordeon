import React from "react";
import renderer from "react-test-renderer";
import { MarkDown } from "./MarkDown";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

describe("MarkDown renders correctly", () => {
  test('MarkDown renders correctly with type=Chevron fill=black and size="m"', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <MarkDown>It's a test task for **overgear**</MarkDown>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
