import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'


const animationStyles = {
  fadein: keyframes`
    0%   { opacity: 0 }
    100% { opacity: 1 }
  `,
  fadeout: keyframes`
    0%   { opacity: 1 }
    100% { opacity: 0 }
  `,
  bounce: keyframes`
    from, 20%, 53%, 80%, to { animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); transform: translate3d(0, 0, 0); }
    40%, 43%                { animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06); transform: translate3d(0, -30px, 0); }
    70%                     { animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06); transform: translate3d(0, -15px, 0); }
    90%                     { transform: translate3d(0, -4px, 0); }
  `,
  flash: keyframes`
    from, 50%, to { opacity: 1; }
    25%, 75%      { opacity: 0; }
  `,
  pulse: keyframes`
    from { transform: scale3d(1, 1, 1); }
    50%  { transform: scale3d(1.05, 1.05, 1.05); }
    to   { transform: scale3d(1, 1, 1); }
  `,
  shake: keyframes`
    from, to                { transform: translate3d(0, 0, 0); }
    10%, 30%, 50%, 70%, 90% { transform: translate3d(-10px, 0, 0); }
    20%, 40%, 60%, 80%      { transform: translate3d(10px, 0, 0); }
  `,
}

const initialStyles = {
  fadein: css`
    opacity: 1;
  `,
  fadeout: css`
    opacity: 0;
  `,
}

class AnimationConstructor extends Component {
  componentDidMount() {
    if (this.props.onTimeOut) {
      setTimeout(() => this.props.onTimeOut(), this.props.duration)
    }
  }

  render() {
    const { className, children } = this.props

    return <div className={className}>{children}</div>
  }
}

AnimationConstructor.defaultProps = {
  duration: 1000,
  onTimeOut: null,
}

AnimationConstructor.propTypes = {
  duration: PropTypes.number,
  onTimeOut: PropTypes.func,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}


export const Animation = styled(AnimationConstructor)`
  ${(p) => p.type && initialStyles[p.type] && css`
    ${initialStyles[p.type]}
  `}

  animation:${(p) => animationStyles[p.type]} ${(p) => p.duration}ms linear ${(p) => p.repeat ? 'infinite' : null};
`

Animation.defaultProps = {
  type: 'fadein',
  duration: 1000,
  repeat: false,
}

Animation.propTypes = {
  type: PropTypes.string,
  duration: PropTypes.number,
  repeat: PropTypes.bool,
}
