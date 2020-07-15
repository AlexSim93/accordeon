import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Accordion } from './Accordion';
import 'jest-styled-components';

describe('Accordion', () => {
  it('Accordion should render correctly by default', () => {
    const accordion = renderer
      .create(<Accordion title="title">Description</Accordion>)
      .toJSON();
    expect(accordion).toMatchSnapshot();
  });

  it('Accordion should render correctly when initiallyExpanded=true', () => {
    const accordion = renderer
      .create(<Accordion title="title" initiallyExpanded>Description</Accordion>)
      .toJSON();
    expect(accordion).toMatchSnapshot();
  });

  it('Accordion should render correctly when expanded=true', () => {
    const accordion = renderer
      .create(<Accordion title="title" expanded>Description</Accordion>)
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
