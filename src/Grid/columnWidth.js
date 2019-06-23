/*
 * Column width is expressed as a percentage value
 * based on the total number of columns specified in grid config.
 */
const columnWidth = columnNumber => 100 / columnNumber;

export default columnWidth;
