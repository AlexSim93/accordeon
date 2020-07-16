import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { AccordionGroup } from './AccordionGroup';
import { Paragraph } from '../../atoms/Paragraph';
import theme from '../../../theme';
import { ThemeProvider } from 'styled-components';

describe('AccordionGroup', () => {
  it('AccordionGroup should render correctly by default', () => {
    const accordionGroup = renderer
      .create(
        <ThemeProvider theme={theme}>
          <AccordionGroup
            titleKey="title"
            descriptionKey="description"
            content={[
              { id: '1', title: 'accordion 1', description: 'description 1' },
              { id: '2', title: 'accordion 2', description: 'description 2' },
            ]}
          />
        </ThemeProvider>,
      )
      .toJSON();
    expect(accordionGroup).toMatchSnapshot();
  });

  it('AccordionGroup should render correctly when initiallyExpanded=1', () => {
    const accordionGroup = renderer
      .create(
        <ThemeProvider theme={theme}>
          <AccordionGroup
            titleKey="title"
            descriptionKey="description"
            content={[
              { id: '1', title: 'accordion 1', description: 'description 1' },
              { id: '2', title: 'accordion 2', description: 'description 2' },
            ]}
            initiallyExpanded={1}
            descriptionComponent={Paragraph}
          />
        </ThemeProvider>,
      )
      .toJSON();
    expect(accordionGroup).toMatchSnapshot();
  });

  it('AccordionGroup should render correctly when forceExpanded=1', () => {
    const accordionGroup = renderer
      .create(
        <ThemeProvider theme={theme}>
          <AccordionGroup
            titleKey="title"
            descriptionKey="description"
            content={[
              { id: '1', title: 'accordion 1', description: 'description 1' },
              { id: '2', title: 'accordion 2', description: 'description 2' },
            ]}
            forceExpanded={1}
            descriptionComponent={Paragraph}
          />
        </ThemeProvider>,
      )
      .toJSON();
    expect(accordionGroup).toMatchSnapshot();
  });

  it('Accordion should expand and collapse on click', () => {
    const accordionGroup = mount(
      <AccordionGroup
        titleKey="title"
        descriptionKey="description"
        content={[
          { id: '1', title: 'accordion 1', description: 'description 1' },
          { id: '2', title: 'accordion 2', description: 'description 2' },
        ]}
        descriptionComponent={Paragraph}
      />,
    );

    const accordionTitle = accordionGroup.find('TitleContainer').first();

    accordionTitle.simulate('click');

    expect(accordionGroup.find('DescriptionContainer')).toHaveLength(1);

    accordionTitle.simulate('click');

    expect(accordionGroup.find('DescriptionContainer')).toHaveLength(0);
  });
});
