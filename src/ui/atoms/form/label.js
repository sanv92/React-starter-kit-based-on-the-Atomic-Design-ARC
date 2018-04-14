import React from 'react'

import styled, { css } from 'styled-components'
import { palette, ifProp, prop } from 'lib/helpers'


export const Label = styled.label.attrs({
  'text-color': palette.getColor('neutrals.text'),
  'required-color': palette.getColor('danger.initial.background'),
})`
  display: block;
  margin: 0 0 .3rem 0;
  color: ${prop('text-color')};
  font-size: 1em;
  text-transform: none;

  ${ifProp('required', css`
    &::after {
      content: ' *';
      color: ${prop('required-color')};
    }
  `)};
`
