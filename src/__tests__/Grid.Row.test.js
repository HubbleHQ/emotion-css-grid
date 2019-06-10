import React from 'react';
import { shallow } from 'enzyme';

import { Row } from '../Grid';

const mockContent = <p>Hello World</p>;

describe('Grid : Row', () => {
  it('should render as expected in its default state', () => {
    const output = shallow(<Row>{mockContent}</Row>);
    expect(output).toMatchSnapshot();
  });
  it('should render with display:block when "allowMismatchedHeights" is TRUE', () => {
    const output = shallow(<Row allowMismatchedHeights>{mockContent}</Row>);
    expect(output).toMatchSnapshot();
  });
  it('should render with display:flex (on non-mobile screens) when "allowMismatchedHeights" is FALSE', () => {
    const output = shallow(<Row allowMismatchedHeights={false}>{mockContent}</Row>);
    expect(output).toMatchSnapshot();
  });
});
