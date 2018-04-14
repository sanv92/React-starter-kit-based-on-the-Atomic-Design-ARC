import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs/react'

import { Alert } from 'ui'
import { TodoList } from 'lib/storybook-helpers'

import { TransitionGroup, Transition } from './transition'


const stories = storiesOf('molecules/Transition', module)

stories
  .add('Default', () => {
    const type = select('type', ['fade', 'zoom', 'rotate', 'roll'], 'fade')

    return (
      <React.Fragment>
        <TodoList>

          {(state) => (

            <TransitionGroup>
              {state.items.map((item, index) => (
                <Transition key={item} type={type} duration={1000}>
                  <div style={{ marginBottom: '1rem' }}>
                    <Alert
                      icon="arrow-circle-right"
                      title={item}
                      onClick={() => state.handleRemove(index)}
                      closeText="Close Now"
                      closable
                    />
                  </div>
                </Transition>
              ))}
            </TransitionGroup>

          )}

        </TodoList>
      </React.Fragment>
    )
  })
