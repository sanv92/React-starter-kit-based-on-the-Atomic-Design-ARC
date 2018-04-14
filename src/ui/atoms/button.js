import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { palette, rem, prop, switchProp, _ } from 'lib/helpers'


const sizes = {
  xs: { height: 18, font: 9 },
  sm: { height: 28, font: 14 },
  md: { height: 38, font: 19 },
  lg: { height: 48, font: 24 },
}

export const Button = styled.button.attrs({
  fontSize: (p) => rem(sizes[p.size].font),
  height: (p) => rem(sizes[p.size].height),
  width: (p) => _.isNumber(p.width) ? rem(p.width) : p.width,
})`
  cursor: pointer;
  line-height: 0;
  outline: none;

  border-radius: ${prop('theme.button.borderRadius')};

  text-transform: ${prop('theme.button.textTransform')};
  font-weight: ${prop('theme.button.fontWeight')};
  font-family: ${prop('theme.button.fontFamily')};

  font-size: ${prop('fontSize')};
  height: ${prop('height')};
  width: ${prop('width')};

  /* @param {string} type - flat | raised */
  ${switchProp('type', {
    flat: css`
      color: ${palette.getColor('initial.background')};
      fill: ${palette.getColor('initial.background')};

      background-color: transparent;
      border: 1px solid ${palette.getColor('hover.background')};

      &:hover {
        background-color: ${palette.getColor('hover.foreground')};
        border-color: ${palette.getColor('hover.foreground')};
      }

      &:disabled, &:disabled:hover {
        cursor: default;
        color: ${palette.getColor('disabled.foreground')};
        fill: ${palette.getColor('disabled.foreground')};

        background-color: transparent;
        border-color: ${palette.getColor('disabled.foreground')};
      }
    `,
    raised: css`
      color: ${palette.getColorText('initial.background')};
      fill: ${palette.getColorText('initial.background')};

      background-color: ${palette.getColor('initial.background')};
      border: 1px solid ${palette.getColor('initial.background')};

      &:hover {
        background-color: ${palette.getColor('hover.background')};
        border-color: ${palette.getColor('hover.background')};
      }

      &:disabled, &:disabled:hover {
        cursor: default;
        color: ${palette.getColorText('disabled.background', 'disabled')};
        fill: ${palette.getColorText('disabled.background', 'disabled')};

        background-color: ${palette.getColor('disabled.background')};
        border-color: ${palette.getColor('disabled.background')};
      }
    `,
  })};
`

Button.defaultProps = {
  type: 'raised',
  color: 'default',
  size: 'md',
  width: 'auto',
  disabled: false,
}

Button.propTypes = {
  type: PropTypes.oneOf(['flat', 'raised']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
}
