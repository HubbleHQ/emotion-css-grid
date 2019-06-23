import React from 'react';
import { shallow } from 'enzyme';

import { Grid, GridConfigProvider } from '..';

describe('Grid : Grid', () => {
  it('should render as expected in its default state', () => {
    const output = shallow(
      <GridConfigProvider gridMaxWidth={1024}>
        <Grid>
          <p>Hello World</p>
        </Grid>
      </GridConfigProvider>,
    );

    const children = output.props().children;
    expect(children).toMatchSnapshot();
    expect(output.html()).toMatchSnapshot();
  });
});