/** @jsx jsx */
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

import { GridContext } from './GridConfig';

const Grid = ({ children, className }) => (
  <GridContext.Consumer>
    {
      ({ gridMaxWidth }) => {
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
        return (
          <div css={gridStyles} className={className}>
            {children}
          </div>
        );
      }
    }
  </GridContext.Consumer>
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