import React from 'react';
import PropTypes from 'prop-types';

/**
 * columnNumber: total number of columns in the grid, expressed as an integer
 * gridMaxWidth: total width of grid expressed in pixels
 * gutterWidth: horizontal padding on columns, expressed in pixels
 * mobileBreakpoint: the screen width (in pixels) at which the grid
 * stops being laid out for mobile and starts being laid out for desktop
 */
const defaultValues = {
  columnNumber: 12,
  gridMaxWidth: 1920,
  gutterWidth: 20,
  mobileBreakpoint: 640,
};

export const GridContext = React.createContext(defaultValues);

export const GridConfigProvider = props => (
  <GridContext.Provider value={props}>
    {props.children}
  </GridContext.Provider>
);

GridConfigProvider.defaultProps = defaultValues;

GridConfigProvider.propTypes = {
  columnNumber: PropTypes.number,
  gridMaxWidth: PropTypes.number,
  gutterWidth: PropTypes.number,
  mobileBreakpoint: PropTypes.number,
};

export default GridConfigProvider;
