import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { TransitionGroup as ReactTransitionGroup, CSSTransition as ReactCSSTransition } from 'react-transition-group'
import { prop } from 'lib/helpers'


const transitionStyles = {
  fade: css`
    &.fade-enter {
      opacity: 0.01;
    }
    
    &.fade-enter.fade-enter-active {
      opacity: 1;
    }
    
    &.fade-exit {
      opacity: 1;
    }
    
    &.fade-exit.fade-exit-active {
      opacity: 0.01;
    }
  `,
  zoom: css`
   &.zoom-enter {
      opacity: 0.01;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    
    &.zoom-enter.zoom-enter-active {
      opacity: 1;
      transform: initial;
    }
    
    &.zoom-exit {
      opacity: 1;
      transform: initial;
    }
    
    &.zoom-exit.zoom-exit-active {
      opacity: 0.01;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  `,
  rotate: css`
    &.rotate-enter {
      opacity: 0.01;
      transform: rotate3d(0, 0, 1, -200deg);
    }
    
    &.rotate-enter.rotate-enter-active {
      opacity: 1;
      transform: initial;
    }
    
    &.rotate-exit {
      opacity: 1;
      transform: initial;
    }
    
    &.rotate-exit.rotate-exit-active {
      opacity: 0.01;
      transform: rotate3d(0, 0, 1, -200deg);
    }
  `,
  roll: css`
    &.roll-enter {
      opacity: 0.01;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
    
    &.roll-enter.roll-enter-active {
      opacity: 1;
      transform: initial;
    }
    
    &.roll-exit {
      opacity: 1;
      transform: initial;
    }
    
    &.roll-exit.roll-exit-active {
      opacity: 0.01;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  `,
}

const styles = css`
  transition: all ${prop('duration')}ms linear;

  ${(p) => transitionStyles[p.type]};
`

const TransitionConstructor = ({ children, className, type, duration, ...props }) => (
  <ReactCSSTransition
    {...props}
    timeout={duration}
    classNames={type}
    className={className}
  >
    {children}
  </ReactCSSTransition>
)

TransitionConstructor.defaultProps = {
  type: 'fade',
  duration: 1000,
}

TransitionConstructor.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(['fade', 'zoom', 'rotate', 'roll']),
  duration: PropTypes.number,
}

export const TransitionGroup = ReactTransitionGroup
export const Transition = styled(TransitionConstructor)`${styles}`

Transition.defaultProps = {
  type: 'fade',
  duration: 1000,
}
