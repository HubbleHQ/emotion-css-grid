import responsiveWidth from '../responsiveWidth';

describe('Grid : responsiveWidth(width, mobileBreakpoint) method', () => {
  it('should render CSS as expected when passed width and breakpoint values', () => {
    const test = responsiveWidth(50, 640);
    expect(test).toMatchSnapshot();
  });
  it('should return an Emotion object', () => {
    const test = responsiveWidth(33.333, 800);
    expect(typeof test).toBe('object');
  });
});
