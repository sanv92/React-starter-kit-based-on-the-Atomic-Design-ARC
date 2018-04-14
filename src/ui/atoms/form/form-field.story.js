import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs/react'
import { action } from '@storybook/addon-actions'


import { FormField } from './form-field'
import { Input } from './input'


const stories = storiesOf('atoms/Form/FormField', module)

stories
  .add('Default', () => {
    const size = select('size', [
      'xs',
      'sm',
      'md',
      'lg',
    ], 'md')

    return (
      <Fragment>
        <FormField size={size}>
          <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
        </FormField>
      </Fragment>
    )
  })
