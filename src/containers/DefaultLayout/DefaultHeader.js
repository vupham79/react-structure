import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { Typography } from 'antd'
import { connect } from 'react-redux'

import { VIETNAMESE_CODE, ENGLISH_CODE } from '../../utils/constants'
import LanguageActions, { LanguageSelectors } from '../LanguageProvider/languageRedux'

import messages from './messages'

import './DefaultHeader.scss'

const { Text } = Typography

/* eslint-disable react/prefer-stateless-function */
class DefaultHeader extends Component {
  state = {}

  render() {
    const { intl, locale, changeLocale } = this.props

    return <></>
  }
}

DefaultHeader.propTypes = {}

DefaultHeader.defaultProps = {}

const mapStateToProps = createStructuredSelector({
  locale: LanguageSelectors.makeSelectLocale(),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader)
