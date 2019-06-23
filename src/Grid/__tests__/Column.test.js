/** @jsx jsx */
import { shallow, mount } from 'enzyme';

import { css, jsx } from '@emotion/core';
import { Column, GridConfigProvider } from '..';

const mockContent = <p>Hello World</p>;

beforeEach(() => {
  jest.spyOn(console, 'error')
  global.console.error.mockImplementation(() => {});
});

afterEach(() => {
  global.console.error.mockRestore();
});

describe('Grid : Column', () => {
  it('should render as expected in its default state', () => {
    const output = shallow(
      <GridConfigProvider gutterWidth={15} columnNumber={16} mobileBreakpoint={600}>
        <Column>
          {mockContent}
        </Column>
      </GridConfigProvider>,
    );
    const children = output.props().children;
    expect(children).toMatchSnapshot();
    expect(output.html()).toMatchSnapshot();
  });
  it('should render as expected when colspan is provided', () => {
    const output = shallow(
      <GridConfigProvider gutterWidth={15} columnNumber={16} mobileBreakpoint={600}>
        <Column colspan={6}>
          {mockContent}
        </Column>
      </GridConfigProvider>,
    );
    const children = output.props().children;
    expect(children).toMatchSnapshot();
    expect(output.html()).toMatchSnapshot();
  });
  it('should render as expected when provided a colspan plus styling', () => {
    const output = shallow(
      <GridConfigProvider gutterWidth={15} columnNumber={16} mobileBreakpoint={600}>
        <Column colspan={6} css={css`border: 1px solid blue;`}>
          {mockContent}
        </Column>
      </GridConfigProvider>,
    );
    const children = output.props().children;
    expect(children).toMatchSnapshot();
    expect(output.html()).toMatchSnapshot();
  });
  it('should throw an error if colspan value is greater than total number of columns', () => {
    const testFunction = () => {
      const output = mount(
        <GridConfigProvider gutterWidth={15} columnNumber={16} mobileBreakpoint={600}>
          <Column colspan={32}>
            {mockContent}
          </Column>
        </GridConfigProvider>,
      );
    };
    expect(testFunction).toThrowErrorMatchingSnapshot();
  });
});