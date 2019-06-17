/** @jsx jsx */
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

import config from './GridConfig';
import columnWidth from './columnWidth';
import responsiveWidth from './responsiveWidth';

const { gutterWidth, mobileBreakpoint } = config;

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

export default Column;