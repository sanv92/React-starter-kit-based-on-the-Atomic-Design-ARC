import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs/react'

import { IconButton } from './icon-button'


const stories = storiesOf('molecules/IconButton', module)

stories
  .add('Default', () => (
    <IconButton icon="address-book" onClick={action('button-click')}>
      Submit
    </IconButton>
  ))

stories
  .add('Size && disabled', () => {
    const color = select('color', [
      'default',
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
    ], 'default')

    const size = select('size', ['xs', 'sm', 'md', 'lg'], 'md')
    const disabled = boolean('disabled', false)

    return (
      <IconButton icon="address-book" color={color} size={size} onClick={action('button-click')} disabled={disabled}>
        Submit
      </IconButton>
    )
  })

stories
  .add('Only Icon', () => {
    const size = select('size', ['xs', 'sm', 'md', 'lg'], 'md')

    return (
      <IconButton icon="check-circle-painted" size={size} onClick={action('button-click')} />
    )
  })
