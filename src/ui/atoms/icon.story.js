import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs/react'
import { Flex, Box } from 'grid-styled'

import { Icon } from './icon'
import icons from './icons'


const stories = storiesOf('atoms/Icon', module)

stories
  .add('Default', () => (
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-around" alignItems="baseline">
      {Object.keys(icons).map((key) => (
        <Box key={key} style={{ textAlign: 'center', padding: '0 15px' }}>
          <section>
            <Icon type={key} size="lg" />
          </section>
          <p>{key}</p>
        </Box>
      ))}
    </Flex>
  ))

stories
  .add('Icon (settings)', () => {
    const color = text('color', '#000')
    const size = select('size', ['xs', 'sm', 'md', 'lg', 'xlg', 'xxlg'], 'md')

    return <Icon type="address-book" color={color} size={size} />
  })
