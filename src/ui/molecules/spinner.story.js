import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs/react'

import { Spinner } from './spinner'


const stories = storiesOf('molecules/Spinner', module)

stories
  .add('Default', () => <Spinner icon="spinner-default" />)

stories
  .add('Speed', () => {
    const defaultNumber = '2'
    const speed = select('speed', ['1', '2', '3', '4', '5'], defaultNumber)

    return <Spinner icon="spinner-default" speed={Number(speed)} size={48} />
  })
