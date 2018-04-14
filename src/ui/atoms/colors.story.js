import React from 'react'
import { storiesOf } from '@storybook/react'

import { theme } from 'themes'


const stories = storiesOf('atoms/Colors', module)

/* eslint-disable no-nested-ternary */
stories
  .add('Default', () => {
    const colors = Object.entries(theme.palette).map(([key, value]) => (
      <div key={key}>
        <h3>{key}</h3>
        {Object.entries(value).map(([k, v]) => (
          <div key={k} style={{ background: v }}>
            <span>Text Example</span>
          </div>
        ))}
      </div>
    ))

    return (
      <div>
        {colors}
      </div>
    )
  })

stories
  .add('Colors Object', () => (
    <div>
      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </div>
  ))
