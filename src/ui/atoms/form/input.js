import React from 'react'

import styled, { css } from 'styled-components'
import { palette, prop, ifProp } from 'lib/helpers'


// 'background-color': palette.getColor('neutrals.fieldBackground'),
// 'border-color': '',
// 'text-color': '',
// 'disabled-background-color': '',
// 'disabled-border-color': '',
// 'error-text-color': '',
// 'error-border-color': '',

export const Input = styled.input`
  margin: 0;
  outline: none;

  font-size: 1em;
  line-height: 1.2em;
  padding: .5em 1em;

  background: ${palette.getColor('neutrals.fieldBackground')};
  border: 1px solid ${palette.getColor('neutrals.field')};
  color: ${palette.getColor('neutrals.text')};

  border-radius: .25rem;
  transition: color .1s ease, border-color .1s ease;

  &:disabled {
    background: ${palette.getColor('default.disabled.foreground')};
    border: 1px solid ${palette.getColor('default.disabled.foreground')};
  }

  ${ifProp('error', css`
    color: ${palette.getColor('danger.initial.background')};
    border: 1px solid ${palette.getColor('danger.initial.background')};
  `)};

  ${ifProp('width', css`
    width: ${prop('width')};
  `)};
`
