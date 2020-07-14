import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { Paragraph } from './Paragraph';
import 'jest-styled-components';
import theme from '../../../theme';

describe('Paragraph renders correctly', () => {
  test('Paragraph renders correctly with color=white and fontFamily=Montserrat', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Paragraph color="white" fontFamily="Montserrat" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
