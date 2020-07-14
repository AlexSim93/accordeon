import * as React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from './Icon';
import * as SvgIconImport from '../../../assets/icons';
import { ICON_SIZE } from './IconTypes';
import 'jest-styled-components';

describe('Icon renders correctly', () => {
  test('Icon renders correctly with type=Chevron fill=black and size="m"', () => {
    const tree = renderer
      .create(<Icon type={SvgIconImport.Chevron} fill="black" size={ICON_SIZE.m} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
