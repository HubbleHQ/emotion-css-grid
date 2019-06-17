/** @jsx jsx */
import { storiesOf } from '@storybook/react';

import { css, jsx } from '@emotion/core';

import GridContainer from './GridContainer';
import Grid from './Grid';
import Row from './Row';
import Column from './Column';
import col from './col';

const containerStyle = css`
  border: 1px solid black;
  background-color: #eee;
`;

const rowStyle = css`
  border-top: 1px solid black;

  &:first-child {
    border-top: none;
  }

  &:nth-child(odd) {
    background-color: #ddd;
  }
`;

const body = css`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: lighter;
`;

storiesOf('Emotion CSS Grid', module)
  .add('Default', () => (
    <div css={body}>
      <h3>Our Grid</h3>
      <p>
        The markup in these storybook views assume default values in the config file.
      </p>
      <p>
        <strong>
          If you change the values in the config file, please expect the storybook demo
          visuals to change as well.
        </strong>
      </p>
      <p>
        At mobile sizes, we expect these columns to become 100% width so we have
        a single-column layout. If you&apos;re at a tiny screen size and everything
        looks like it&apos;s all 100% wide, that&apos;s the correct behaviour :)
      </p>
      <GridContainer css={containerStyle}>
        <Grid>
          <Row css={rowStyle}>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
            <Column>1/12th</Column>
          </Row>
          <Row css={rowStyle}>
            <Column css={col(2)}>1/6th</Column>
            <Column css={col(2)}>1/6th</Column>
            <Column css={col(2)}>1/6th</Column>
            <Column css={col(2)}>1/6th</Column>
            <Column css={col(2)}>1/6th</Column>
            <Column css={col(2)}>1/6th</Column>
          </Row>
          <Row css={rowStyle}>
            <Column css={col(4)}>
              <p>This column is the width of 4 columns (33%)!</p>
            </Column>
            <Column css={col(4)}>
              <p>This column is the width of 4 columns (33%)!</p>
            </Column>
            <Column css={col(4)}>
              <p>This column is the width of 4 columns (33%)!</p>
            </Column>
          </Row>
          <Row css={rowStyle}>
            <Column css={col(6)}>
              <p>This column is the width of 6 columns (50%)!</p>
            </Column>
            <Column css={col(6)}>
              <p>This column is the width of 6 columns (50%)!</p>
            </Column>
          </Row>
          <Row css={rowStyle}>
            <Column css={col(3)}>
              <p>This column is the width of 3 columns!</p>
            </Column>
            <Column css={col(3)}>
              <p>This column is the width of 3 columns!</p>
            </Column>
            <Column css={col(3)}>
              <p>This column is the width of 3 columns!</p>
            </Column>
            <Column css={col(3)}>
              <p>This column is the width of 3 columns!</p>
            </Column>
          </Row>
          <Row css={rowStyle}>
            <Column css={col(3)}>
              <p>This column is the width of 3 columns!</p>
            </Column>
            <Column css={col(3)}>
              <p>This column is the width of 3 columns!</p>
            </Column>
            <Column css={col(6)}>
              <p>This column is the width of 6 columns!</p>
            </Column>
          </Row>
          <Row css={rowStyle}>
            <Column css={col(12)}>
              <p>This column is the width of 12 columns!</p>
            </Column>
          </Row>
        </Grid>
      </GridContainer>
    </div>
  ));
