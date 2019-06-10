/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
// import { css, cx } from 'react-emotion';
import { css, jsx } from '@emotion/core';
import config from './GridConfig';

const {
  gridMaxWidth,
  columnNumber,
  gutterWidth,
  mobileBreakpoint,
} = config;

const columnWidthPX = gridMaxWidth / columnNumber;
const columnWidth = (columnWidthPX / gridMaxWidth) * 100;

const GridContainerStyles = css`
  width: 100%;
  max-width: ${gridMaxWidth}px;
  min-height: 1px;
`;
const GridContainer = ({ children, className }) => (
  <div css={GridContainerStyles} className={className}>
    {children}
  </div>
);

GridContainer.defaultProps = {
  className: '',
};

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

const GridStyles = css`
  width: 100%;
  max-width: ${gridMaxWidth}px;
`;
const Grid = ({ children, className }) => (
  <div css={GridStyles} className={className}>
    {children}
  </div>
);

Grid.defaultProps = {
  className: '',
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};


const RowStyles = css`
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
      RowStyles,
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
  allowMismatchedHeights: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
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

const ColumnStyles = css`
  ${responsiveGutters};
  ${responsiveWidth(columnWidth)};
  float: left;
  min-height: 1px;
`;
const Column = ({ children, className }) => (
  <div css={ColumnStyles} className={className}>
    {children}
  </div>
);

Column.defaultProps = {
  className: '',
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
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
