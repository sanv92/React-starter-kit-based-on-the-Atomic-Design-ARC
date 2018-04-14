import React from 'react'
import PropTypes from 'prop-types'

import styled, { withTheme } from 'styled-components'
import { Icon, Button } from '../atoms'


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  ${Icon} > * {
    fill: inherit;
  }
`

const Text = styled.span`
  display: block;
  padding: .4375em;
`

export const IconButtonWithTheme = ({ icon, size, children, ...props }) => (
  <Button size={size} {...props}>
    <Wrapper>
      <Icon type={icon} size={20} />
      {children && (
        <Text>{children}</Text>
      )}
    </Wrapper>
  </Button>
)

IconButtonWithTheme.defaultProps = {
  ...Button.defaultProps,
  size: 'md',
  children: null,
}

IconButtonWithTheme.propTypes = {
  type: PropTypes.oneOf(['raised']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger']),
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
}

export const IconButton = withTheme(IconButtonWithTheme)
