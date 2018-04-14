import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Label } from './label'


const stories = storiesOf('atoms/Form/Label', module)

stories
  .add('Default', () => (
    <Label>
      Test text
    </Label>
  ))

stories
  .add('Disabled', () => (
    <Fragment>
      <Label required>
        User
      </Label>
      <Label required>
        Password
      </Label>
    </Fragment>
  ))
