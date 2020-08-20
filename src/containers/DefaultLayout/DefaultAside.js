import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}
// eslint-disable-next-line react/prefer-stateless-function
class DefaultAside extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props

    return <React.Fragment>Aside</React.Fragment>
  }
}

DefaultAside.propTypes = propTypes
DefaultAside.defaultProps = defaultProps

export default DefaultAside
