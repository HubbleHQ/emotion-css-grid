/** @jsx jsx */
import { css } from '@emotion/core';

import config from './GridConfig';

const { mobileBreakpoint } = config;

/* @param {number} column width expressed as a percentage
 * The responsiveWidth CSS describes how columns should
 * always collapse to a single-column layout (100% width)
 * on mobile sizes. At any size above a mobile range,
 * the column's width will be set by whatever numeric
 * percentage value argument that is passed in.
 */
const responsiveWidth = widthValue => css`
  width: 100%;
  @media (min-width: ${mobileBreakpoint}px) {
    width: ${widthValue}%;
  }
`;

export default responsiveWidth;
