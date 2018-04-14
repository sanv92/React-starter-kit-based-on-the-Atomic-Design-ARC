import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Input } from './input'


const stories = storiesOf('atoms/Form/Input', module)

stories
  .add('Default', () => (
    <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
  ))

stories
  .add('Disabled', () => (
    <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." disabled />
  ))

stories
  .add('Error', () => (
    <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." error />
  ))

stories
  .add('Width', () => (
    <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." width="50%" />
  ))
