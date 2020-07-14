import React from 'react';
import renderer from 'react-test-renderer';
import { Divider } from './Divider';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

describe('Divider renders correctly', () => {
  test('Divider with height=10 and bg="black" renders correctly', () => {
    const tree = renderer
      .create(<ThemeProvider theme={theme}><Divider height={10} bg="black" /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
