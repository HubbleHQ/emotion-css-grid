import { responsiveWidth } from '..';

describe('Grid : responsiveWidth(n) method', () => {
  it('should render CSS as expected when passed a width percentage value', () => {
    const test = responsiveWidth(50);
    expect(test).toMatchSnapshot();
  });
  it('should return an Emotion object', () => {
    const test = responsiveWidth(33.333);
    expect(typeof test).toBe('object');
  });
});
