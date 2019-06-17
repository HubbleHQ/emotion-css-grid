import React from 'react';
import { shallow } from 'enzyme';

import { col } from '..';

describe('Grid : col(n) method', () => {
  it('should render via Emotion as CSS when passed as a css prop to a React component', () => {
    const test = col(2);
    const wrapper = shallow(<div css={test} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return an Emotion object when passed a valid number', () => {
    const test = col(2);
    expect(typeof test).toBe('object');
  });
  it('should throw an error when passed a non-number', () => {
    const testFunction = () => {
      const test = col('oops');
    }
    expect(testFunction).toThrowErrorMatchingSnapshot();
  });
  it('should throw an error when passed a number that is less than 1', () => {
    const testFunction = () => {
      const test = col(0);
    }
    expect(testFunction).toThrowErrorMatchingSnapshot();
  });
  it('should throw an error when passed a number that is greater than the max number of grid columns', () => {
    const testFunction = () => {
      const test = col(75);
    }
    expect(testFunction).toThrowErrorMatchingSnapshot();
  });
});
