/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { Col } from '../Grid';

const MockComponent = props => <div css={props.styling} />;
MockComponent.propTypes = {
  styling: PropTypes.string.isRequired,
};

let workingConsoleError;

/*
 * Before/After each test we temporarily assign console.error to a mock function,
 * so that we don't get ugly red warnings in the terminal when running tests!
 * This allows us to check that we would be throwing errors correctly in real life,
 * such as if someone passed an incorrect argument to the Col method!
 */
beforeEach(() => {
  // NB. **ALWAYS** remember to reset the mocked console messages back to their original state!!
  workingConsoleError = console.error;
  console.error = jest.fn();
});

afterEach(() => {
  console.error = workingConsoleError;
});

describe('Grid : Col(n) method', () => {
  it('should render via Emotion as CSS when passed as a className to a React component', () => {
    const test = Col(2);
    const wrapper = shallow(<MockComponent styling={test} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return a CSS string when passed a valid number', () => {
    const test = Col(2);
    expect(typeof test).toBe('string');
  });
  it('should return null when passed a non-number', () => {
    const test = Col('oops');
    expect(test).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });
  it('should return null when passed a number that is less than 1', () => {
    const test = Col(0);
    expect(test).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });
  it('should return null when passed a number that is greater than the max number of grid columns', () => {
    const test = Col(75);
    expect(test).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });
});
