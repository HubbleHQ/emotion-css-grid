/** @jsx jsx */
import { css } from '@emotion/core';

/* @param {number} column width expressed as a percentage
 * @param {number} mobile breakpoint, expressed in pixels
 * The responsiveWidth CSS describes how columns should
 * always collapse to a single-column layout (100% width)
 * on mobile sizes. At any size above a mobile range,
 * the column's width will be set by whatever numeric
 * percentage value argument that is passed in.
 */
const responsiveWidth = (widthValue, mobileBreakpoint) => css`
  width: 100%;
  @media (min-width: ${mobileBreakpoint}px) {
    width: ${widthValue}%;
  }
`;

export default responsiveWidth;
