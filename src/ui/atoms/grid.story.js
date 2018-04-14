/* eslint-disable no-magic-numbers */
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import { Flex as Row, Box as Col } from 'grid-styled'

import { theme } from 'themes'


const Container = styled.div`
  max-width: ${(p) => p.theme.containerMaxWidth};
  margin: auto;

  border: 1px solid #000;
`

const Element = styled.div`
  background-color: rgba(0, 0, 255, .1);
  border: 2px solid rgba(0, 0, 255, .2);
  padding: 1rem;
`

const stories = storiesOf('atoms/Grid', module)
  .addDecorator((fn) => (
    <ThemeProvider
      theme={{
        ...theme,
        breakpoints: ['32em', '48em', '64em'],
      }}
    >
      {fn()}
    </ThemeProvider>
  ))

stories
  .add('Default', () => (
    <Container>
      <Row>
        <Col>
          <Element>A</Element>
        </Col>
        <Col>
          <Element>B</Element>
        </Col>
        <Col>
          <Element>C</Element>
        </Col>
      </Row>
    </Container>
  ))

stories
  .add('12 grid styled system', () => (
    <Container>
      <Row>
        <Col width={1}>
          <Element>A</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 2]}>
          <Element>A</Element>
        </Col>
        <Col width={[1 / 2]}>
          <Element>B</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 3]}>
          <Element>A</Element>
        </Col>
        <Col width={[1 / 3]}>
          <Element>B</Element>
        </Col>
        <Col width={[1 / 3]}>
          <Element>C</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 4]}>
          <Element>A</Element>
        </Col>
        <Col width={[1 / 4]}>
          <Element>B</Element>
        </Col>
        <Col width={[1 / 4]}>
          <Element>C</Element>
        </Col>
        <Col width={[1 / 4]}>
          <Element>D</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 5]}>
          <Element>A</Element>
        </Col>
        <Col width={[1 / 5]}>
          <Element>B</Element>
        </Col>
        <Col width={[1 / 5]}>
          <Element>C</Element>
        </Col>
        <Col width={[1 / 5]}>
          <Element>D</Element>
        </Col>
        <Col width={[1 / 5]}>
          <Element>E</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 12]}><Element>1</Element></Col>
        <Col width={[1 / 12]}><Element>2</Element></Col>
        <Col width={[1 / 12]}><Element>3</Element></Col>
        <Col width={[1 / 12]}><Element>4</Element></Col>
        <Col width={[1 / 12]}><Element>5</Element></Col>
        <Col width={[1 / 12]}><Element>6</Element></Col>
        <Col width={[1 / 12]}><Element>7</Element></Col>
        <Col width={[1 / 12]}><Element>8</Element></Col>
        <Col width={[1 / 12]}><Element>9</Element></Col>
        <Col width={[1 / 12]}><Element>10</Element></Col>
        <Col width={[1 / 12]}><Element>11</Element></Col>
        <Col width={[1 / 12]}><Element>12</Element></Col>
      </Row>
      <Row>
        <Col width={[1 / 24]}><Element>1</Element></Col>
        <Col width={[1 / 24]}><Element>2</Element></Col>
        <Col width={[1 / 24]}><Element>3</Element></Col>
        <Col width={[1 / 24]}><Element>4</Element></Col>
        <Col width={[1 / 24]}><Element>5</Element></Col>
        <Col width={[1 / 24]}><Element>6</Element></Col>
        <Col width={[1 / 24]}><Element>7</Element></Col>
        <Col width={[1 / 24]}><Element>8</Element></Col>
        <Col width={[1 / 24]}><Element>9</Element></Col>
        <Col width={[1 / 24]}><Element>10</Element></Col>
        <Col width={[1 / 24]}><Element>11</Element></Col>
        <Col width={[1 / 24]}><Element>12</Element></Col>

        <Col width={[1 / 24]}><Element>13</Element></Col>
        <Col width={[1 / 24]}><Element>14</Element></Col>
        <Col width={[1 / 24]}><Element>15</Element></Col>
        <Col width={[1 / 24]}><Element>16</Element></Col>
        <Col width={[1 / 24]}><Element>17</Element></Col>
        <Col width={[1 / 24]}><Element>18</Element></Col>
        <Col width={[1 / 24]}><Element>19</Element></Col>
        <Col width={[1 / 24]}><Element>20</Element></Col>
        <Col width={[1 / 24]}><Element>21</Element></Col>
        <Col width={[1 / 24]}><Element>22</Element></Col>
        <Col width={[1 / 24]}><Element>23</Element></Col>
        <Col width={[1 / 24]}><Element>24</Element></Col>
      </Row>
    </Container>
  ))

stories
  .add('24 grid styled system', () => (
    <Container>
      <Row>
        <Col width={1}>
          <Element>A</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 2]}>
          <Element>A</Element>
        </Col>
        <Col width={[1 / 2]}>
          <Element>B</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 3]}>
          <Element>A</Element>
        </Col>
        <Col width={[1 / 3]}>
          <Element>B</Element>
        </Col>
        <Col width={[1 / 3]}>
          <Element>C</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 4]}>
          <Element>A</Element>
        </Col>
        <Col width={[1 / 4]}>
          <Element>B</Element>
        </Col>
        <Col width={[1 / 4]}>
          <Element>C</Element>
        </Col>
        <Col width={[1 / 4]}>
          <Element>D</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 5]}>
          <Element>A</Element>
        </Col>
        <Col width={[1 / 5]}>
          <Element>B</Element>
        </Col>
        <Col width={[1 / 5]}>
          <Element>C</Element>
        </Col>
        <Col width={[1 / 5]}>
          <Element>D</Element>
        </Col>
        <Col width={[1 / 5]}>
          <Element>E</Element>
        </Col>
      </Row>
      <Row>
        <Col width={[1 / 24]}><Element>1</Element></Col>
        <Col width={[1 / 24]}><Element>2</Element></Col>
        <Col width={[1 / 24]}><Element>3</Element></Col>
        <Col width={[1 / 24]}><Element>4</Element></Col>
        <Col width={[1 / 24]}><Element>5</Element></Col>
        <Col width={[1 / 24]}><Element>6</Element></Col>
        <Col width={[1 / 24]}><Element>7</Element></Col>
        <Col width={[1 / 24]}><Element>8</Element></Col>
        <Col width={[1 / 24]}><Element>9</Element></Col>
        <Col width={[1 / 24]}><Element>10</Element></Col>
        <Col width={[1 / 24]}><Element>11</Element></Col>
        <Col width={[1 / 24]}><Element>12</Element></Col>

        <Col width={[1 / 24]}><Element>13</Element></Col>
        <Col width={[1 / 24]}><Element>14</Element></Col>
        <Col width={[1 / 24]}><Element>15</Element></Col>
        <Col width={[1 / 24]}><Element>16</Element></Col>
        <Col width={[1 / 24]}><Element>17</Element></Col>
        <Col width={[1 / 24]}><Element>18</Element></Col>
        <Col width={[1 / 24]}><Element>19</Element></Col>
        <Col width={[1 / 24]}><Element>20</Element></Col>
        <Col width={[1 / 24]}><Element>21</Element></Col>
        <Col width={[1 / 24]}><Element>22</Element></Col>
        <Col width={[1 / 24]}><Element>23</Element></Col>
        <Col width={[1 / 24]}><Element>24</Element></Col>
      </Row>
    </Container>
  ))

stories
  .add('Breakpoints', () => (
    <Container>
      <Row flexWrap>
        <Col width={[1, 1 / 2, 1 / 6]}>
          <Element>A</Element>
        </Col>
        <Col width={[1, 1 / 2, 1 / 6]}>
          <Element>B</Element>
        </Col>
        <Col width={[1, 1 / 2, 1 / 6]}>
          <Element>C</Element>
        </Col>
        <Col width={[1, 1 / 2, 1 / 6]}>
          <Element>D</Element>
        </Col>
        <Col width={[1, 1 / 2, 1 / 6]}>
          <Element>E</Element>
        </Col>
        <Col width={[1, 1 / 2, 1 / 6]}>
          <Element>F</Element>
        </Col>
      </Row>
    </Container>
  ))
