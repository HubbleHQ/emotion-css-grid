import React from 'react';
import { shallow } from 'enzyme';

import { GridContainer } from '..';

describe('Grid : GridContainer', () => {
  it('should render as expected in its default state', () => {
    const output = shallow(<GridContainer><p>Hello World</p></GridContainer>);
    expect(output).toMatchSnapshot();
    expect(output.props('css')).toMatchSnapshot();
  });
});
