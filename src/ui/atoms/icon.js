import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { em, palette } from 'lib/helpers'

import icons from './icons'


const sizes = {
  xs: 18,
  sm: 28,
  md: 38,
  lg: 48,
  xlg: 58,
  xxlg: 68,
}

const size = (props) => sizes[props.size] ? em(sizes[props.size]) : em(props.size)

const styles = css`
  ${(p) => p.size && css`
    height: ${size};
    width: ${size};
  `}

  & > * {
    fill: ${(p) => p.color || palette.getColor('neutrals.icon')};
  }
`

const IconWrapper = ({ type, className }) => {
  const SVG = icons[type]

  return <SVG className={className} />
}

IconWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export const Icon = styled(IconWrapper)`${styles}`

Icon.defaultProps = {
  size: 'md',
}

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xlg', 'xxlg']),
    PropTypes.number,
  ]),
  color: PropTypes.string,
}
