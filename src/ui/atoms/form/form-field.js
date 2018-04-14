import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { prop, rem } from 'lib/helpers'


const sizes = {
  xs: { font: 13 },
  sm: { font: 16 },
  md: { font: 18 },
  lg: { font: 22 },
}

/* eslint-disable no-magic-numbers */
export const FormField = styled.div.attrs({
  font: (p) => rem(sizes[p.size].font),
})`
  margin-bottom: ${rem(15)};

  & > input {
    font-size: ${prop('font')};
  }
`

FormField.defaultProps = {
  size: 'md',
}

FormField.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
}
