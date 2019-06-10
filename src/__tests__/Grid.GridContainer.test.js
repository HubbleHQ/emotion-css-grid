import React from 'react';
import { shallow } from 'enzyme';

import { GridContainer } from '../Grid';

const mockContent = <p>Hello World</p>;

describe('Grid : GridContainer', () => {
  it('should render as expected in its default state', () => {
    const output = shallow(<GridContainer>{mockContent}</GridContainer>);
    expect(output).toMatchSnapshot();
  });
});
