import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { theme } from 'themes'
import { globalStyles } from 'styles'



injectGlobal`${globalStyles}`


addDecorator(withKnobs)
addDecorator((fn) => (
  <ThemeProvider theme={theme}>
    <div style={{padding: '15px'}}>
      {fn()}
    </div>
  </ThemeProvider>
))

const requireAll  = (requireContext) => requireContext.keys().map(requireContext)
const loadStories = () => requireAll(require.context('../src/ui', true, /\.story\.js$/))

configure(loadStories, module)
