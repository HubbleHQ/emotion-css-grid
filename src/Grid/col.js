import { css } from '@emotion/core';
import config from './GridConfig';
import columnWidth from './columnWidth';
import responsiveWidth from './responsiveWidth';

const { columnNumber } = config;

/*
 * @param {number} column width expressed as a whole number from 1 to max Columns
 * @returns {(string|null)} EmotionJS CSS string, or null
 * @example
 * <Column css={col(2)}>
 * <Column css={[col(6), someOtherStyling]}>
 * NOTE: just because you CAN add additional styling to a column doesn't mean you SHOULD.
 */
const col = (number) => {
  if (
    number > columnNumber
    || number < 1
    || typeof number !== 'number'
  ) {
    throw new Error(`This is a ${columnNumber} column grid. 
    The value supplied to Col (${number}) won't work!`);
  }
  return css`
    ${responsiveWidth(columnWidth * number)};
    `;
};

export default col;
