/** @jsx jsx */
import { storiesOf } from '@storybook/react';

import { css, jsx } from '@emotion/core';

import Grid from './Grid';
import Row from './Row';
import Column from './Column';
import col from './col';

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
    </div>
  ))
  .add('Equal Heights Toggle', () => (
    <div css={body}>
      <Grid css={gridStyle}>
        <Row css={rowStyle}>
          <Column css={col(6)}>
            <p>
            This row is using the&nbsp;
              <strong>default style rules</strong>
              &nbsp;which apply flex in order to have equal-height columns regardless of content.
            </p>
          </Column>
          <Column css={col(6)}>
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
          <Column css={css`background: skyblue;`}>
            <p>This column is the width of 1 column (1/12th)!</p>
          </Column>
          <Column css={[col(6), css`background: pink;`]}>
            <p>
              This row has the prop &nbsp;
              <strong>allowMismatchedHeights</strong>
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
          <Column css={[col(5), css`background: yellow;`]}>
            <p>This column is the width of 5 columns!</p>
          </Column>
        </Row>
        <Row css={rowStyle}>
          <Column>
            <p>This column is the width of 1 column (1/12th)!</p>
          </Column>
          <Column css={col(6)}>
            <p>
              This row is using the default style rules which apply flex in order
              to have equal-height columns regardless of content.
            </p>
          </Column>
          <Column css={col(5)}>
            <p>This column is the width of 5 columns!</p>
          </Column>
        </Row>
      </Grid>
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
            <Column css={col(12)}>
              <h1>Sherlock Holmes closed his eyes</h1>
            </Column>
          </Row>
          <Row>
            <Column css={col(6)}>
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
            <Column css={col(6)}>
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
            <Column css={col(3)}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/1019/400/400')`]} />
            </Column>
            <Column css={col(3)}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/1015/400/400')`]} />
            </Column>
            <Column css={col(3)}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/10/400/400')`]} />
            </Column>
            <Column css={col(3)}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/1002/400/400')`]} />
            </Column>
          </Row>
          <Row>
            <Column css={col(4)}>
              <h3>And yet it was a fact.</h3>
              <p>
                Problems may be solved in the study which have baffled all those who have sought
                a solution by the aid of their senses.
              </p>
            </Column>
            <Column css={col(4)}>
              <h3>And yet it was a fact.</h3>
              <p>
                To carry the art, however, to its highest pitch, it is necessary that the reasoner
                should be able to utilise all the facts which have come to his knowledge.
              </p>
            </Column>
            <Column css={col(4)}>
              <h3>And yet it was a fact.</h3>
              <p>
                This in itself implies, as you will readily see, a possession of all knowledge,
                which, even in these days of free education and encyclopaedias, is a somewhat
                rare accomplishment.
              </p>
            </Column>
          </Row>
          <Row>
            <Column css={col(12)}>
              <div css={[imageRow, css`background-image: url('https://picsum.photos/id/1002/1280/200')`]}>
                <h4 css={footerText}>A feeling of almost scientific interest.</h4>
              </div>
            </Column>
          </Row>
        </Grid>
      </div>
    );
  });
