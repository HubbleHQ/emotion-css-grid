/** @jsx jsx */
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';


import config from './GridConfig';

const { mobileBreakpoint } = config;

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

export default Row;
