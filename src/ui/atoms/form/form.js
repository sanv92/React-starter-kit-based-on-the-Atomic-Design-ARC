import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { ifProp, rem } from 'lib/helpers'


/* eslint-disable no-magic-numbers */
export const Form = styled.form`
  ${ifProp('vrtical', css`
    display: flex;
    flex-direction: column;
  `)};

  ${ifProp('horizontal', css`
     & > * {
      display: flex;
      align-items: center;
      justify-content: space-between;
     }
  `)};

  ${ifProp('inline', css`
    display: flex;
    flex-direction: row;
    & > * {
      margin-right: ${rem(18)};
    }
  `)};
`

Form.defaultProps = {
  vrtical: true,
  horizontal: false,
  inline: false,
}

Form.propTypes = {
  vrtical: PropTypes.bool,
  horizontal: PropTypes.bool,
  inline: PropTypes.bool,
}
