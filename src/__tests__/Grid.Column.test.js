/** @jsx jsx */
import React from 'react';
import { shallow } from 'enzyme';

// import { css, cx } from 'react-emotion';
import { css, jsx } from '@emotion/core';
import { Column, Col } from '../Grid';

const mockContent = <p>Hello World</p>;

describe('Grid : Column', () => {
  it('should render as expected in its default state', () => {
    const output = shallow(<Column>{mockContent}</Column>);
    expect(output).toMatchSnapshot();
  });
  it('should render as expected when passed a Col(n) method as a className', () => {
    const output = shallow(<Column css={Col(4)}>{mockContent}</Column>);
    expect(output).toMatchSnapshot();
  });
  it('should render as expected when passed a Col(n) method and other styling', () => {
    const output = shallow(
      <Column
        css={[
          Col(2),
          css`
            border: 1px solid blue;
          `,
        ]}
      >
        {mockContent}
      </Column>,
    );
    expect(output).toMatchSnapshot();
  });
  it('should allow additional styling to override Col(n) method rules', () => {
    const output = shallow(
      <Column
        css={[
          Col(6),
          css`
            width: 50%;
            @media (min-width: 768px) {
              width: 75%;
            }
          `,
        ]}
      >
        {mockContent}
      </Column>,
    );
    expect(output).toMatchSnapshot();
  });
});
