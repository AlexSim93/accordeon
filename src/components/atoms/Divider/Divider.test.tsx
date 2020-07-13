import React from 'react';
import renderer from 'react-test-renderer';
import { Divider } from './Divider';

describe('Divider renders correctly', () => {
    test('Divider with height=10 and bg="black" renders correctly', () => {
        const tree = renderer
            .create(<Divider height={10} bg="black" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})