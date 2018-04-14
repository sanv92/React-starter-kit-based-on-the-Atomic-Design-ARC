import React from 'react'
import styled from 'styled-components'

import { ifProp } from 'lib/helpers/index'


const heading = (tag) => (props) => props.theme.typography[tag]

const styles = styled.div`
  ${ifProp('typography.fontFamily.heading')}
`


export const H1 = styles.withComponent('h1').extend`
  font-weight: normal;

  ${heading('h1')};
  ${ifProp('typography.fontWeights.heading.normal')};
`

export const H2 = styles.withComponent('h2').extend`
  font-weight: normal;

  ${heading('h2')};
  ${ifProp('typography.fontWeights.heading.normal')};
`

export const H3 = styles.withComponent('h3').extend`
  font-weight: normal;

  ${heading('h3')};
  ${ifProp('typography.fontWeights.heading.normal')};
`

export const H4 = styles.withComponent('h4').extend`
  font-weight: normal;

  ${heading('h4')};
  ${ifProp('typography.fontWeights.heading.normal')};
`

export const H5 = styles.withComponent('h5').extend`
  font-weight: normal;

  ${heading('h5')};
  ${ifProp('typography.fontWeights.heading.normal')};
`

export const H6 = styles.withComponent('h6').extend`
  font-weight: bold;

  ${heading('h6')};
  ${ifProp('typography.fontWeights.heading.bold')};
`
