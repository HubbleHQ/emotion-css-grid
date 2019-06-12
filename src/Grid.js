/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';

import { css, jsx } from '@emotion/core';
import config from './GridConfig';

const {
  gridMaxWidth,
  columnNumber,
  gutterWidth,
  mobileBreakpoint,
} = config;

const columnWidth = 100 / columnNumber; // percentage value

const gridContainerStyles = css`
  width: 100%;
  max-width: ${gridMaxWidth}px;
  min-height: 1px;
`;
const GridContainer = ({ children, className }) => (
  <div css={gridContainerStyles} className={className}>
    {children}
  </div>
);

GridContainer.defaultProps = {
  className: '',
};

GridContainer.propTypes = {
  /**
   * Children of the GridContainer; should be a <Grid />.
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional class name.
   */
  className: PropTypes.string,
};

const gridStyles = css`
  width: 100%;
  max-width: ${gridMaxWidth}px;
`;
const Grid = ({ children, className }) => (
  <div css={gridStyles} className={className}>
    {children}
  </div>
);

Grid.defaultProps = {
  className: '',
};

Grid.propTypes = {
  /**
   * Grid elements: should be <Row />.
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional class name.
   */
  className: PropTypes.string,
};


const rowStyles = css`
  &:before,
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;
const RowMismatchedHeights = css`display: block;`;
const RowEqualHeights = css`
  display: block;
  @media (min-width: ${mobileBreakpoint}px) {
    display: flex;
  }
`;

const Row = ({ allowMismatchedHeights, children, className }) => (
  <div
    className={className}
    css={[
      rowStyles,
      allowMismatchedHeights ? RowMismatchedHeights : RowEqualHeights,
    ]}
  >
    {children}
  </div>
);

Row.defaultProps = {
  allowMismatchedHeights: false,
  className: '',
};

Row.propTypes = {
  /**
   * Allow columns in a row to display the height of their
   * child content, instead of a uniform matching height.
   * Default behaviour is to equalise the column heights.
   */
  allowMismatchedHeights: PropTypes.bool,
  /**
   * Row elements: should be <Column />.
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional class name.
   */
  className: PropTypes.string,
};

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

/*
 * We omit gutters on columns by default on mobile sizes
 */
const responsiveGutters = css`
  padding: 0;
  @media (min-width: ${mobileBreakpoint}px) {
    padding-left: ${gutterWidth / 2}px;
    padding-right: ${gutterWidth / 2}px;
  }
`;

const columnStyles = css`
  ${responsiveGutters};
  ${responsiveWidth(columnWidth)};
  float: left;
  min-height: 1px;
`;
const Column = ({ children, className }) => (
  <div css={columnStyles} className={className}>
    {children}
  </div>
);

Column.defaultProps = {
  className: '',
};

Column.propTypes = {
  /**
   * Column elements: this is where the page content will sit,
   * so these elements can be headings, <div> etc.
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional class name.
   */
  className: PropTypes.string,
};

/*
 * @param {number} column width expressed as a whole number from 1 to max Columns
 * @returns {(string|null)} EmotionJS CSS string, or null
 * @example
 * <Column css={Col(2)}>
 * <Column css={[Col(6), someOtherStyling]}>
 * NOTE: just because you CAN add additional styling to a column doesn't mean you SHOULD.
 */
const Col = (number) => {
  if (
    number > columnNumber
    || number < 1
    || typeof number !== 'number'
  ) {
    // eslint-disable-next-line no-console
    console.error(
      `This is a ${
        columnNumber
      } column grid. The value supplied to Col (${number}) won't work!`,
    );
    return null;
  }
  return css`
    ${responsiveWidth(columnWidth * number)};
  `;
};

export {
  GridContainer, Grid, Row, Column, Col,
};
