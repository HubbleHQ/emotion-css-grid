/** @jsx jsx */
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';


import config from './GridConfig';

const { gridMaxWidth } = config;

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

export default GridContainer;
