import React from 'react'
import { storiesOf } from '@storybook/react'

import { FormError } from './form-error'


const stories = storiesOf('atoms/Form/Error', module)

const response = {
  error: {
    code: 'BadArgument',
    message: 'Multiple errors in ContactInfo data',
    target: 'ContactInfo',
    details: [
      {
        code: 'NullValue',
        target: 'PhoneNumber',
        message: 'Phone number must not be null',
      },
      {
        code: 'NullValue',
        target: 'LastName',
        message: 'Last name must not be null',
      },
      {
        code: 'MalformedValue',
        target: 'Address',
        message: 'Address is not valid',
      },
    ],
  },
}

stories
  .add('Default', () => (
    <FormError data={response.error.details} type="PhoneNumber" />
  ))
