import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import { Flex, Box } from 'grid-styled'
import Readme from './box.readme.md'


const Container = styled.div`
  font-size: 1.4rem;
  border: 2px solid rgba(255, 0, 0, .3);
`

const Element = styled(Box)`
  background-color: rgba(0, 0, 255, .1);
  border: 2px solid rgba(0, 0, 255, .2);
  padding: 1rem;
`

const Col = styled(Flex)``

const stories = storiesOf('atoms/Box', module)

stories
  .addDecorator(withReadme(Readme))
  .add('Row', () => (
    <Container>
      <Flex flexDirection="row">
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Flex>
    </Container>
  ))
  .add('Column', () => (
    <Container>
      <Flex flexDirection="column">
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Flex>
    </Container>
  ))
  .add('Padding', () => (
    <Container>
      <Flex flexDirection="row" p="2rem">
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Flex>
    </Container>
  ))
  .add('Row gap', () => (
    <Container>
      <Flex flexDirection="row">
        <Element>A</Element>
        <Element ml="2rem">B</Element>
        <Element ml="2rem">C</Element>
        <Element ml="2rem">D</Element>
      </Flex>
    </Container>
  ))
  .add('Column gap', () => (
    <Container>
      <Flex flexDirection="column">
        <Element>A</Element>
        <Element mt="2rem">B</Element>
        <Element mt="2rem">C</Element>
        <Element mt="2rem">D</Element>
      </Flex>
    </Container>
  ))
  .add('Padding & gap row', () => (
    <Container>
      <Flex flexDirection="row" p="2rem">
        <Element>A</Element>
        <Element ml="2rem">B</Element>
        <Element ml="2rem">C</Element>
        <Element ml="2rem">D</Element>
      </Flex>
    </Container>
  ))
  .add('Padding & gap column', () => (
    <Container>
      <Flex flexDirection="column" p="2rem">
        <Element>A</Element>
        <Element mt="2rem">B</Element>
        <Element mt="2rem">C</Element>
        <Element mt="2rem">D</Element>
      </Flex>
    </Container>
  ))
  .add('Custom tag', () => (
    <Container>
      <Flex>
        <Element is="strong">A</Element>
        <Element is="strong">B</Element>
        <Element is="strong">C</Element>
        <Element is="strong">D</Element>
      </Flex>
    </Container>
  ))
  .add('Grid', () => (
    <React.Fragment>
      <Container>
        <Flex flexWrap='wrap'>
          <Col p={2} width={[ 1, 1/2, 1/4 ]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
            <Col p={1} color='white' bg='blue'>Box</Col>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1, 1/2, 1/4 ]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
            <Col p={1} color='white' bg='blue'>Box</Col>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
        </Flex>
      </Container>
      <Container>
        <Flex flexWrap='wrap'>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[1/12]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
        </Flex>
      </Container>
    </React.Fragment>
  ))
  .add('Grid 2', () => (
    <React.Fragment>
      <ThemeProvider
        theme={{
          space: [0, 6, 12, 18, 24],
          breakpoints: ['30em', '40em', '60em', '65em'],
        }}
      >
        <Flex flexWrap='wrap' mx={-2}>
          <Col p={2} width={[ 1/24 ]}>
            <Col color='white' bg='blue'>Box</Col>
            <Col color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1/24 ]}>
            <Col color='white' bg='blue'>Box</Col>
            <Col color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1/24 ]}>
            <Col color='white' bg='blue'>Box</Col>
            <Col color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1/24 ]}>
            <Col color='white' bg='blue'>Box</Col>
            <Col color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1/24 ]}>
            <Col color='white' bg='blue'>Box</Col>
            <Col color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1/24 ]}>
            <Col color='white' bg='blue'>Box</Col>
            <Col color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1/24 ]}>
            <Col color='white' bg='blue'>Box</Col>
            <Col color='white' bg='blue'>Box</Col>
          </Col>
        </Flex>
        {/*<Row flexWrap='wrap' mx={-2}>*/}
        {/*<Col p={2} width={[ 1, 1/2, 1/4, 1/6, 1/8 ]}>*/}
        {/*<Col color='white' bg='blue'>Box</Col>*/}
        {/*</Col>*/}
        {/*<Col p={2} width={[ 1, 1/2, 1/4, 1/6, 1/8 ]}>*/}
        {/*<Col p={1} color='white' bg='blue'>Box</Col>*/}
        {/*</Col>*/}
        {/*<Col p={2} width={[ 1, 1/2, 1/4, 1/6, 1/8 ]}>*/}
        {/*<Col p={1} color='white' bg='blue'>Box</Col>*/}
        {/*</Col>*/}
        {/*<Col p={2} width={[ 1, 1/2, 1/4, 1/6, 1/8 ]}>*/}
        {/*<Col p={1} color='white' bg='blue'>Box</Col>*/}
        {/*</Col>*/}
        {/*</Row>*/}
      </ThemeProvider>
    </React.Fragment>
  ))
  .add('Grid System', () => (
    <Container>
      <ThemeProvider
        theme={{
          space: [0, 6, 12, 18, 24],
          breakpoints: ['32em', '48em', '64em'],
        }}
      >
        <Flex flexWrap='wrap' mx={-2}>
          <Col p={2} width={[ 1, 1/2, 1/4 ]}>
            <Col color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1, 1/2, 1/4 ]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1, 1/2, 1/4 ]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
          <Col p={2} width={[ 1, 1/2, 1/4 ]}>
            <Col p={1} color='white' bg='blue'>Box</Col>
          </Col>
        </Flex>
      </ThemeProvider>
    </Container>
  ))
