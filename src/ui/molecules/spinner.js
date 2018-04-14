import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { prop } from 'lib/helpers'

import { Icon } from 'ui'


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} ${prop('speed')}s linear infinite;

  ${Icon} {
    display: block;
  }
`

export const Spinner = ({speed, icon, size}) => (
  <Rotate speed={speed}>
    <Icon type={icon} size={size} />
  </Rotate>
)

Spinner.defaultProps = {
  speed: 2,
  size: 48,
}

Spinner.propTypes = {
  speed: PropTypes.number,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
}
