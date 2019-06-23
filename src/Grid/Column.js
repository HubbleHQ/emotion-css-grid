/** @jsx jsx */
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

import { GridContext } from './GridConfig';
import columnWidth from './columnWidth';
import responsiveWidth from './responsiveWidth';

const Column = ({ children, colspan, className }) => (
  <GridContext.Consumer>
    {
      ({
        gutterWidth,
        mobileBreakpoint,
        columnNumber,
      }) => {
        if (colspan > columnNumber) {
          throw new Error(`<Column> cannot use a colspan prop that is 
          greater than the total number of columns in the grid (total 
            columns is ${columnNumber}, but received ${colspan}).`);
        }

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

        const width = columnWidth(columnNumber) * colspan;

        const columnStyles = css`
          ${responsiveGutters};
          ${responsiveWidth(width, mobileBreakpoint)};
          float: left;
          min-height: 1px;
        `;

        return (
          <div css={columnStyles} className={className}>
            {children}
          </div>
        );
      }
    }
  </GridContext.Consumer>
);

Column.defaultProps = {
  colspan: 1,
  className: '',
};

Column.propTypes = {
  /**
   * Column elements: this is where the page content will sit,
   * so these elements can be headings, <div> etc.
   */
  children: PropTypes.node.isRequired,
  /**
   * Colspan is a number which determines the final width of the column (in percent).
   * <Column colspan={6} /> means the column is the width of 6 columns in total.
   */
  colspan: PropTypes.number,
  /**
   * Optional class name.
   */
  className: PropTypes.string,
};

export default Column;
