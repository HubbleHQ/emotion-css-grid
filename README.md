# Emotion CSS Grid
A CSS grid framework for projects using React and Emotion JS (10)

## How to Use

### Installation

```
npm i @hubble/emotion-css-grid
```

### Dependencies

This package has several peer dependencies. In order to use Emotion CSS Grid you will also need to install:

```js
"@emotion/core": "^10.0.10",
"prop-types": "^15.6.0",
"react": "^16.3.0",
```

### Get Started

For React files where you intend to use the grid, make sure you include these imports:

```js
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Grid, Row, Column } from '@hubble/emotion-css-grid';
```

An example of basic usage (using the default settings) looks like this:

```js
<Grid>
  <Row>
    <Column colspan={6}></Column>
    <Column colspan={6}></Column>
  </Row>
  <Row>
    <Column colspan={4}></Column>
    <Column colspan={4}></Column>
    <Column colspan={4}></Column>
  </Row>
  <Row>
    <Column>
      <p>
        The colspan of this column will default to 1
      </p>
    </Column>
    <Column colspan={11}></Column>
  </Row>
</Grid>
```

When `<Column>` is used without the `colspan` prop, it will default to the width of one column. If you specify a colspan value that is larger than the maximum number of columns in your grid, an error will be thrown.

### Column Height Behaviour

The default behaviour of `<Column>` components is to utilise flex in order to display with equalised heights within their row:

```js
  <Row>
    <Column colspan={4} />
    <Column colspan={4} />
    <Column colspan={4} />
  </Row>
```
```
+---+---+---+
|   |   |   |
|   |   |   |
|   |   |   |
+---+---+---+
```

You can change the behaviour of `<Column>` components to inherit the height of their respective content by passing the boolean `allowMismatchedHeights` to the parent `<Row>` component.

```js
  <Row allowMismatchedHeights>
    <Column colspan={4} />
    <Column colspan={4} />
    <Column colspan={4} />
  </Row>
```
```
+---+---+---+
|   |   |   |
|   +---+   |
|   |   +---+
+---+
```

### Default Grid Settings and Behaviours

Out of the box, the grid is set to use:

- 12 columns
- a maximum screen width of 1920px
- a gutter width (left and right padding) of 20px
- a mobile breakpoint of 640px

'Gutter width' refers to left and right padding of columns. This means that if you have a `gutterWidth` of **20px**, each column will have **10px** of padding on the left and right. The default behaviour drops this padding at mobile sizes, so columns will have zero left and right padding at any screen size below the `mobileBreakpoint` value.

The mobile breakpoint means that for screen sizes smaller than 640px, the grid's columns will automatically collapse to a single-column layout, taking on a width of 100% of the grid. You can remove this behaviour by setting the `mobileBreakpoint` value to 1 (see below).

### Configuring the Grid

You can customise any of the above settings by using `<GridConfigProvider>`:

```js
<GridConfigProvider 
  columnNumber={12} 
  gridMaxWidth={1920} 
  gutterWidth={20} 
  mobileBreakpoint={640}
>
```

Any settings which do not receive custom values will use the defaults.

### Example

```js
import { GridConfigProvider, Grid, Row, Column } from '@hubble/emotion-css-grid';
```

```js
<GridConfigProvider gridMaxWidth={960} columnNumber={6}>
  <Grid>
    <Row>
      <Column colspan={6}>
        <h1>
          This column spans 100% of the grid width, which is 960px.
        </h1>
      </Column>
    </Row>
  </Grid>
</GridConfigProvider>
```

### Styling 

The grid uses [@emotion/core](https://www.npmjs.com/package/@emotion/core) and our recommendation is to use this for styling your React components. However, you can also pass in `className` props if preferred:

```js
<Column colspan={2} className="my-column-style">
```

---------------------------------------------------------------


## Development

### Get Started
```shell
yarn install
```

### Run Tests
```shell
yarn test
```

### Start Storybook
```shell
yarn run storybook
```

[Storybook](https://storybook.js.org/docs/basics/introduction/) is a user interface development environment, enabling developers to view and test UI components in isolation.

