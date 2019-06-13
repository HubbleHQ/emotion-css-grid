import React from 'react';
import { shallow } from 'enzyme';

import { Grid } from '..';

describe('Grid : Grid', () => {
  it('should render as expected in its default state', () => {
    const output = shallow(<Grid><p>Hello World</p></Grid>);
    expect(output).toMatchSnapshot();
    expect(output.props('css')).toMatchSnapshot();
  });
});
