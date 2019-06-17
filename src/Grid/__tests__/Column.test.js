/** @jsx jsx */
import { shallow } from 'enzyme';

import { css, jsx } from '@emotion/core';
import { Column, col } from '..';

const mockContent = <p>Hello World</p>;

describe('Grid : Column', () => {
  it('should render as expected in its default state', () => {
    const output = shallow(<Column>{mockContent}</Column>);
    expect(output).toMatchSnapshot();
    expect(output.props('css')).toMatchSnapshot();
  });
  it('should render as expected when passed a col(n) method as a className', () => {
    const output = shallow(<Column css={col(4)}>{mockContent}</Column>);
    expect(output).toMatchSnapshot();
    expect(output.props('css')).toMatchSnapshot();
  });
  it('should render as expected when passed a col(n) method and other styling', () => {
    const output = shallow(
      <Column
        css={[
          col(2),
          css`
            border: 1px solid blue;
          `,
        ]}
      >
        {mockContent}
      </Column>,
    );
    expect(output).toMatchSnapshot();
    expect(output.props('css')).toMatchSnapshot();
  });
});