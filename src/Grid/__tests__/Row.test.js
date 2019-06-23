import React from 'react';
import { shallow } from 'enzyme';

import { Row, GridConfigProvider } from '..';

const mockContent = <p>Hello World</p>;

describe('Grid : Row', () => {
  it('should render as expected in its default state', () => {
    const output = shallow(
      <GridConfigProvider mobileBreakpoint={600}>
        <Row>{mockContent}</Row>
      </GridConfigProvider>
    );
    expect(output).toMatchSnapshot();
    const children = output.props().children;
    expect(children).toMatchSnapshot();
  });
  it('should render with display:block when "allowMismatchedHeights" is TRUE', () => {
    const output = shallow(
      <GridConfigProvider mobileBreakpoint={600} allowMismatchedHeights>
        <Row>{mockContent}</Row>
      </GridConfigProvider>,
    );
    expect(output).toMatchSnapshot();
    const children = output.props().children;
    expect(children).toMatchSnapshot();
  });
  it('should render with display:flex (on non-mobile screens) when "allowMismatchedHeights" is explicitly FALSE', () => {
    const output = shallow(
      <GridConfigProvider mobileBreakpoint={600} allowMismatchedHeights={false}>
        <Row>{mockContent}</Row>
      </GridConfigProvider>,
    );
    expect(output).toMatchSnapshot();
    const children = output.props().children;
    expect(children).toMatchSnapshot();
  });
});
