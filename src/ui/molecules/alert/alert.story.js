import React, {Fragment} from 'react'
import { storiesOf } from '@storybook/react'

import { Alert } from './alert'


const stories = storiesOf('molecules/Alert', module)

stories
  .add('Default', () => (
    <Fragment>
      <Alert
        color="danger"
        icon="address-book"
        title="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
        message="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
        closable
      />

      <br />

      <Alert
        color="danger"
        icon="address-book"
        title="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
        message="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
        closable
        closeText="Close Now"
      />

      <br />

      <Alert
        color="danger"
        icon="address-book"
        title="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
        message="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
      />

      <br />

      <Alert
        color="danger"
        icon="address-book"
        title="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
      />

      <br />

      <Alert
        icon="address-book"
        title="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
      />

      <br />

      <Alert
        icon="address-book"
        title="text text text text text text text text text text text text text"
      />

      <br />

      <Alert
        title="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
      />
    </Fragment>
  ))
