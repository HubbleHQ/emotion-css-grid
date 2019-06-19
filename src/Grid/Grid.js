/** @jsx jsx */
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

import config from './GridConfig';
const { gridMaxWidth } = config;

const gridStyles = css`
  width: 100%;
  max-width: ${gridMaxWidth}px;
  min-height: 1px;

  & *,
  & *::before,
  & *::after { 
    box-sizing: border-box; 
  }
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

export default Grid;