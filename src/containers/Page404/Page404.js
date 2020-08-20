import React, { Component } from 'react'
import { connect } from 'react-redux'

class Page404 extends Component {
  render() {
    return <>404 Page</>
  }
}

Page404.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Page404)
