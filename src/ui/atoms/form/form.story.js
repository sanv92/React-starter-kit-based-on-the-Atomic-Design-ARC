import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Form } from './form'
import { FormField } from './form-field'
import { Label } from './label'
import { Input } from './input'


const stories = storiesOf('atoms/Form/Form', module)

stories
  .add('Default', () => (
    <Form>
      <FormField>
        <Label>Login:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Password:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Date:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Qustion:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
    </Form>
  ))

stories
  .add('Vertical', () => (
    <Form vrtical>
      <FormField>
        <Label>Login:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Password:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Date:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Qustion:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
    </Form>
  ))

stories
  .add('Horizontal', () => (
    <Form horizontal style={{ width: 500 }}>
      <FormField>
        <Label>Login:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Password:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Date:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Qustion:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
    </Form>
  ))

stories
  .add('Inline', () => (
    <Form inline>
      <FormField>
        <Label>Login:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Password:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Date:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
      <FormField>
        <Label>Qustion:</Label>
        <Input type="text" placeholder="Test text ..." onChange={action('input-change')} value="Test text ..." />
      </FormField>
    </Form>
  ))
