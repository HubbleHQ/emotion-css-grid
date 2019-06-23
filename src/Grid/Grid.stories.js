/** @jsx jsx */
import { storiesOf } from '@storybook/react';

import { css, jsx } from '@emotion/core';

import Grid from './Grid';
import Row from './Row';
import Column from './Column';
import GridConfigProvider from './GridConfig';

const gridStyle = css`
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
        This default grid is using the default values set by Context. These values are:
      </p>
      <pre>
        <code>
          columnNumber: 12
          <br />
          gridMaxWidth: 1920
          <br />
          gutterWidth: 20
          <br />
          mobileBreakpoint: 640
        </code>
      </pre>
      <p css={css`color: crimson;`}>
        <strong>
          If you change the default values in the config file, please
          note that the storybook demo visuals will also change accordingly.
        </strong>
      </p>
      <p>
        At mobile sizes, we expect these columns to become 100% width so we have
        a single-column layout. If you&apos;re at a tiny screen size and everything
        looks like it&apos;s all 100% wide, that&apos;s the correct behaviour :)
      </p>
      <Grid css={gridStyle}>
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
          <Column colspan={2}>1/6th</Column>
          <Column colspan={2}>1/6th</Column>
          <Column colspan={2}>1/6th</Column>
          <Column colspan={2}>1/6th</Column>
          <Column colspan={2}>1/6th</Column>
          <Column colspan={2}>1/6th</Column>
        </Row>
        <Row css={rowStyle}>
          <Column colspan={4}>
            <p>This column is the width of 4 columns (33%)!</p>
          </Column>
          <Column colspan={4}>
            <p>This column is the width of 4 columns (33%)!</p>
          </Column>
          <Column colspan={4}>
            <p>This column is the width of 4 columns (33%)!</p>
          </Column>
        </Row>
        <Row css={rowStyle}>
          <Column colspan={6}>
            <p>This column is the width of 6 columns (50%)!</p>
          </Column>
          <Column colspan={6}>
            <p>This column is the width of 6 columns (50%)!</p>
          </Column>
        </Row>
        <Row css={rowStyle}>
          <Column colspan={3}>
            <p>This column is the width of 3 columns!</p>
          </Column>
          <Column colspan={3}>
            <p>This column is the width of 3 columns!</p>
          </Column>
          <Column colspan={3}>
            <p>This column is the width of 3 columns!</p>
          </Column>
          <Column colspan={3}>
            <p>This column is the width of 3 columns!</p>
          </Column>
        </Row>
        <Row css={rowStyle}>
          <Column colspan={3}>
            <p>This column is the width of 3 columns!</p>
          </Column>
          <Column colspan={3}>
            <p>This column is the width of 3 columns!</p>
          </Column>
          <Column colspan={6}>
            <p>This column is the width of 6 columns!</p>
          </Column>
        </Row>
        <Row css={rowStyle}>
          <Column colspan={12}>
            <p>This column is the width of 12 columns!</p>
          </Column>
        </Row>
      </Grid>
    </div>
  ))
  .add('Equal Heights Toggle', () => (
    <div css={body}>
      <Grid css={gridStyle}>
        <Row css={rowStyle}>
          <Column colspan={6}>
            <p>
            This row is using the&nbsp;
              <strong css={css`color: crimson;`}>default style rules</strong>
              &nbsp;which apply flex in order to have equal-height columns regardless of content.
            </p>
          </Column>
          <Column colspan={6}>
            <p>This column is the width of 6 columns!</p>
            <p>
              Sherlock Holmes closed his eyes and placed his elbows upon the arms of his chair,
              with his finger-tips together. "The ideal reasoner," he remarked, "would, when he
              had once been shown a single fact in all its bearings, deduce from it not only
              all the chain of events which led up to it but also all the results which would
              follow from it.
            </p>
          </Column>
        </Row>
        <Row allowMismatchedHeights css={rowStyle}>
          <Column css={css`background: pink;`}>
            <p>This column is the width of 1 column (1/12th)!</p>
          </Column>
          <Column colspan={6} css={css`background: skyblue;`}>
            <p>
              This row has the prop &nbsp;
              <strong css={css`color: crimson;`}>allowMismatchedHeights</strong>
              &nbsp;applied, which means it will not use flexbox to equalise the
              heights of the child columns.
            </p>
            <p>
              Sherlock Holmes closed his eyes and placed his elbows upon the arms of his chair,
              with his finger-tips together. "The ideal reasoner," he remarked, "would, when he
              had once been shown a single fact in all its bearings, deduce from it not only
              all the chain of events which led up to it but also all the results which would
              follow from it.
            </p>
          </Column>
          <Column colspan={5} css={css`background: yellow;`}>
            <p>This column is the width of 5 columns!</p>
          </Column>
        </Row>
        <Row css={rowStyle}>
          <Column>
            <p>This column is the width of 1 column (1/12th)!</p>
          </Column>
          <Column colspan={6}>
            <p>
              This row is using the default style rules which apply flex in order
              to have equal-height columns regardless of content.
            </p>
          </Column>
          <Column colspan={5}>
            <p>This column is the width of 5 columns!</p>
          </Column>
        </Row>
      </Grid>
    </div>
  ))
  .add('Custom Config Example', () => (
    <div css={body}>
      <h3>Grid example using custom config values</h3>
      <p>
        This is an example where the grid is wrapped in a GridConfigProvider,
        with custom values set. The values used are:
      </p>
      <pre>
        <code>
          gridMaxWidth: 900
          <br />
          columnNumber: 6
        </code>
      </pre>
      <p>
        Setting a custom value for gutterWidth or mobileBreakpoint is also possible,
        though it is not mandatory to set all custom values. Values which are not set
        in the GridConfigProvider will use the defaults inherited from Context.
      </p>
      <GridConfigProvider
        gridMaxWidth={900}
        columnNumber={6}
      >
        <Grid css={gridStyle}>
          <Row css={rowStyle}>
            <Column colspan={6}>
              <p>This column has a colspan of 6, which is the max width for this grid.</p>
            </Column>
          </Row>
          <Row css={rowStyle}>
            <Column colspan={2}>
              <p>This column has a colspan of 2, which is a third of this grid's width.</p>
            </Column>
            <Column colspan={2}>
              <p>This column has a colspan of 2, which is a third of this grid's width.</p>
            </Column>
            <Column colspan={2}>
              <p>This column has a colspan of 2, which is a third of this grid's width.</p>
            </Column>
          </Row>
          <Row css={rowStyle}>
            <Column colspan={5}>
              <p>This column has a colspan of 5.</p>
            </Column>
            <Column>
              <p>This column has a colspan of 1, which is the default colspan value.</p>
            </Column>
          </Row>
        </Grid>
      </GridConfigProvider>
    </div>
  ))
  .add('Example with Content', () => {

    const webpageRowStyle = css`
      background-color: powderblue;
      padding: 15px 0;
    `;

    const backgroundImg = css`
      padding: 15px;
      background-image: url("https://picsum.photos/id/10/600/600");
      background-size: cover;
      height: 100%;

      & h2, h3, p {
        margin: 0 0 15px;
        color: white;
      }
    `;

    const imageRow = css`
      background-size: cover;
      overflow: hidden;
      height: 100px;
      min-width: 100px;
    `;

    const footerText = css`
      padding-right: 15px;
      text-align: right;
      font-weight: 400;
      color: white;
    `;
    return (
      <div css={body}>
        <Grid>
          <Row css={webpageRowStyle}>
            <Column colspan={12}>
              <h1>Sherlock Holmes closed his eyes</h1>
            </Column>
          </Row>
          <Row>
            <Column colspan={6}>
              <h2>And placed his elbows upon the arms of his chair</h2>
              <p>
                Problems may be solved in the study which have baffled all those who have sought
                a solution by the aid of their senses. To carry the art, however, to its highest
                pitch, it is necessary that the reasoner should be able to utilise all the facts
                which have come to his knowledge; and this in itself implies, as you will readily
                see, a possession of all knowledge, which, even in these days of free education
                and encyclopaedias, is a somewhat rare accomplishment.
              </p>
            </Column>
            <Column colspan={6}>
              <div css={backgroundImg}>
                <h2>
                  That such a change should have taken place was incredible to him.
                </h2>
                <h3>
                  And yet it was a fact.
                </h3>
                <p>
                  As he often remembered afterwards, and always with no small wonder,
                  he found himself at first gazing at the portrait with a feeling of
                  almost scientific interest.
                </p>
              </div>
            </Column>
          </Row>
          <Row css={webpageRowStyle}>
            <Column colspan={3}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/1019/400/400')`]} />
            </Column>
            <Column colspan={3}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/1015/400/400')`]} />
            </Column>
            <Column colspan={3}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/10/400/400')`]} />
            </Column>
            <Column colspan={3}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/1002/400/400')`]} />
            </Column>
          </Row>
          <Row>
            <Column colspan={4}>
              <h3>And yet it was a fact.</h3>
              <p>
                Problems may be solved in the study which have baffled all those who have sought
                a solution by the aid of their senses.
              </p>
            </Column>
            <Column colspan={4}>
              <h3>And yet it was a fact.</h3>
              <p>
                To carry the art, however, to its highest pitch, it is necessary that the reasoner
                should be able to utilise all the facts which have come to his knowledge.
              </p>
            </Column>
            <Column colspan={4}>
              <h3>And yet it was a fact.</h3>
              <p>
                This in itself implies, as you will readily see, a possession of all knowledge,
                which, even in these days of free education and encyclopaedias, is a somewhat
                rare accomplishment.
              </p>
            </Column>
          </Row>
          <Row>
            <Column colspan={12}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/1002/1280/200')`]}>
                <h4 css={footerText}>A feeling of almost scientific interest.</h4>
              </div>
            </Column>
          </Row>
        </Grid>
      </div>
    );
  });
