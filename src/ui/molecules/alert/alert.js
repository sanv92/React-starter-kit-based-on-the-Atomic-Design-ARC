import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'lib/helpers'

import { Icon } from '../../atoms'

import { AlertContent } from './alert-content'
import { AlertClose } from './alert-close'
import { AlertTitle } from './alert-title'
import { AlertMessage } from './alert-message'
import { AlertCloseText } from './alert-close-text'


const styles = css`
  background: ${palette.getColor('initial.foreground')};
  border: 1px solid ${palette.getColor('initial.background')};

  ${AlertCloseText} {
    color: ${palette.getColor('initial.background')};
  }

  ${Icon} {
    & > * {
      fill: ${palette.getColor('initial.background')};
    }
  }
`

export const AlertWrapper = styled.div`
  border-radius: .25rem;
  padding: .5rem 1rem;
  
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const alertWrapper = ({ className, icon, title, message, closable, closeText, onClick }) => {
  const size = message ? 24 : 16 // eslint-disable-line no-magic-numbers

  return (
    <AlertWrapper className={className}>
      {icon && <Icon type={icon} size={size} />}
      <AlertContent>
        <AlertTitle>{title}</AlertTitle>
        {message && <AlertMessage>{message}</AlertMessage>}
      </AlertContent>
      {closable && (
        <AlertClose onClick={onClick}>
          {closeText ? <AlertCloseText>{closeText}</AlertCloseText> : <Icon type="times-circle" size={32} />}
        </AlertClose>
      )}
    </AlertWrapper>
  )
}

alertWrapper.defaultProps = {
  icon: null,
  message: null,
  closable: null,
  closeText: null,
  onClick: () => {},
}

alertWrapper.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  closable: PropTypes.bool,
  closeText: PropTypes.string,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}


export const Alert = styled(alertWrapper)`${styles}`

Alert.defaultProps = {
  message: null,
  color: 'success',
}

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
}
