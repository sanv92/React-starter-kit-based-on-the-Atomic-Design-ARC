import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { storiesOf } from '@storybook/react'
import { select, number } from '@storybook/addon-knobs/react'

import { Icon } from './icon'
import { Animation } from './animation'


class EmulateAction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hide: false,
    }
  }

  handleHide = () => {
    this.setState({ hide: true })
  }

  render() {
    return (
      <Fragment>
        {this.props.children({
          hide: this.state.hide,
          handleHide: this.handleHide,
        })}
      </Fragment>
    )
  }
}

EmulateAction.propTypes = {
  children: PropTypes.func.isRequired,
}


const stories = storiesOf('atoms/Animation', module)

stories
  .add('Default', () => (
    <Fragment>
      <Animation>
        <Icon type="pied-piper-pp" size={48} />
      </Animation>
    </Fragment>
  ))

  .add('Action fadein && fadeout', () => (
    <Fragment>
      <EmulateAction>
        {(state) => (
          <Fragment>
            <Animation type={!state.hide ? 'fadein' : 'fadeout'} duration={3000} onTimeOut={state.handleHide}>
              <Icon type="pied-piper-pp" size={48} />
            </Animation>
          </Fragment>
        )}
      </EmulateAction>
    </Fragment>
  ))

  .add('Repeat', () => (
    <Fragment>
      <div style={{ textAlign: 'center' }}>
        <Animation type="bounce" repeat>
          <Icon type="pied-piper-pp" size={48} />
        </Animation>
      </div>
    </Fragment>
  ))

stories
  .add('All Effects', () => {
    const timeSpeed = 2000
    const type = select('type', [
      'fadein',
      'fadeout',
      'bounce',
      'flash',
      'pulse',
      'shake',
    ], 'fadein')
    const duration = number('duration', timeSpeed)

    return (
      <Fragment>
        <div style={{ textAlign: 'center' }}>
          <Animation type={type} duration={duration} repeat>
            <Icon type="pied-piper-pp" size={48} />
          </Animation>
        </div>
      </Fragment>
    )
  })
