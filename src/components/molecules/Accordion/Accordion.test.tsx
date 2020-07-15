import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { Accordion } from './Accordion';
import theme from '../../../theme';

describe('Accordion', () => {
  it('Accordion should render correctly by default', () => {
    const accordion = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Accordion title="title">Description</Accordion>
        </ThemeProvider>,
      )
      .toJSON();
    expect(accordion).toMatchSnapshot();
  });

  it('Accordion should render correctly when initiallyExpanded=true', () => {
    const accordion = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Accordion title="title" initiallyExpanded>
            Description
          </Accordion>
        </ThemeProvider>,
      )
      .toJSON();
    expect(accordion).toMatchSnapshot();
  });

  it('Accordion should render correctly when expanded=true', () => {
    const accordion = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Accordion title="title" expanded>
            Description
          </Accordion>
        </ThemeProvider>,
      )
      .toJSON();
    expect(accordion).toMatchSnapshot();
  });

  it('Accordion should expand and collapse on click', () => {
    const accordion = mount(<Accordion title="title">Description</Accordion>);

    const accordionTitle = accordion.find('TitleContainer');

    accordionTitle.simulate('click');

    expect(accordion.exists('DescriptionContainer')).toEqual(true);

    accordionTitle.simulate('click');

    expect(accordion.exists('DescriptionContainer')).toEqual(false);
  });
});
