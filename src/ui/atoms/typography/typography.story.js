import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { theme } from 'themes/index'
import { H1, H2, H3, H4, H5, H6 } from 'ui/index'


const stories = storiesOf('atoms/Typography', module)

/* eslint-disable max-len */
stories
  .add('Paragraph', () => (
    <Fragment>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </Fragment>
  ))

stories
  .add('Fonts', () => (
    <Fragment>
      {Object.entries(theme.typography.fontFamily).map(([key, value]) => {
        const fontWeightsNormal = theme.typography.fontWeights[key].normal
        const fontWeightsBold = theme.typography.fontWeights[key].bold
        const fontWeightsItalic = theme.typography.fontWeights[key].italic

        return (
          <Fragment key={key}>
            <div>
              <h3 style={{ fontFamily: value, fontWeight: fontWeightsNormal }}>
                {fontWeightsNormal}: {value.normal}
              </h3>
              <h3 style={{ fontFamily: value, fontWeight: fontWeightsBold }}>
                {fontWeightsBold}: {value.bold}
              </h3>
              <h3 style={{ fontFamily: value, fontWeight: fontWeightsItalic, fontStyle: 'italic' }}>
                {fontWeightsItalic}: {value.italic}
              </h3>
            </div>
            <hr />
          </Fragment>
        )
      })}
    </Fragment>
  ))

stories
  .add('Inline Elements', () => (
    <Fragment>
      <div className="text">
        <p><a href="#">This is a text link</a></p>

        <p><strong>Strong is used to indicate strong importance</strong></p>

        <p><em>This text has added emphasis</em></p>

        <p>The <b>b element</b> is stylistically different text from normal text, without any special importance</p>

        <p>The <i>i element</i> is text that is set off from the normal text</p>

        <p>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation</p>

        <p>
          <del>This text is deleted</del>
          and <ins>This text is inserted</ins>
        </p>

        <p><s>This text has a strikethrough</s></p>

        <p>Superscript<sup>®</sup></p>

        <p>Subscript for things like H<sub>2</sub>O</p>

        <p>
          <small>This small text is small for for fine print, etc.</small>
        </p>

        <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>

        <p>Keybord input: <kbd>Cmd</kbd></p>

        <p>
          <q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation</q>
        </p>

        <p>
          <cite>This is a citation</cite>
        </p>
        <p>The <dfn>dfn element</dfn> indicates a definition.</p>

        <p>The <mark>mark element</mark> indicates a highlight</p>

        <p><code>This is what inline code looks like.</code></p>

        <p><samp>This is sample output from a computer program</samp></p>

        <p>The <var>variarble element</var>, such as <var>x</var> = <var>y</var></p>
      </div>
    </Fragment>
  ))

stories
  .add('Headings', () => (
    <Fragment>
      <H1>Heading Level 1</H1>
      <H2>Heading Level 2</H2>
      <H3>Heading Level 3</H3>
      <H4>Heading Level 4</H4>
      <H5>Heading Level 5</H5>
      <H6>Heading Level 6</H6>
    </Fragment>
  ))
