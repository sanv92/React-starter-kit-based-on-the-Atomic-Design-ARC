import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs/react'
import { action } from '@storybook/addon-actions'

import { Button } from './button'


const stories = storiesOf('atoms/Button', module)

stories
  .add('Default', () => (
    <Button onClick={action('button-click')}>
      Submit
    </Button>
  ))

stories
  .add('Theme color && size && disabled', () => {
    const type = select('type', [
      'flat',
      'raised',
    ], 'raised')

    const color = select('color', [
      'default',
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
    ], 'default')

    const size = select('size', [
      'xs',
      'sm',
      'md',
      'lg',
    ], 'md')

    const disabled = boolean('disabled', false)

    return (
      <Button type={type} color={color} size={size} onClick={action('button-click')} disabled={disabled}>
        Submit
      </Button>
    )
  })

stories
  .add('Custom Width', () => (
    <div>
      <Button size="md" width="100%" onClick={action('button-click')}>
        <span>Submit</span>
      </Button>

      <br />
      <br />

      <Button size="md" width="300px" onClick={action('button-click')}>
        <span>Submit</span>
      </Button>
    </div>
  ))
