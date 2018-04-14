import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'


const ErrorText = styled.span`
  display: block;
  color: #ff0000;
`

export const FormError = ({ data, type }) => (
  <Fragment>
    {data.filter((error) => error.target === type).map((error) => (
      <ErrorText key={error.target}>{error.message}</ErrorText>
    ))}
  </Fragment>
)

FormError.defaultProps = {
  data: [],
}

FormError.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
}
