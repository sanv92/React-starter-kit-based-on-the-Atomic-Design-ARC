import React from 'react'

import { ThemeProviderMock } from 'lib/helpers'
import { Button } from './button'
import renderer from 'react-test-renderer'


describe('Button', () => {
  test('Default Button (snapshot)', () => {
    const button = renderer.create(
      <ThemeProviderMock>
        <Button>Submit</Button>
      </ThemeProviderMock>
    ).toJSON()

    expect(button).toMatchSnapshot()
  })

  test('Button - size (snapshot)', () => {
    const tree = renderer.create(
      <ThemeProviderMock>
        <Button size="lg">Submit</Button>
      </ThemeProviderMock>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Button - color (snapshot)', () => {
    const tree = renderer.create(
      <ThemeProviderMock>
        <Button color="primary">Submit</Button>
        <Button color="success">Submit</Button>
      </ThemeProviderMock>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Button - disabled (snapshot)', () => {
    const tree = renderer.create(
      <ThemeProviderMock>
        <Button disabled>Submit</Button>
      </ThemeProviderMock>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('Button - all props (snapshot)', () => {
    const tree = renderer.create(
      <ThemeProviderMock>
        <Button color="success" size="lg" disabled>Submit</Button>
      </ThemeProviderMock>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
