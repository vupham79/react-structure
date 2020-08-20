/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import moment from 'moment'
import './moment_vi'

import { LanguageSelectors } from './languageRedux'

export class LanguageProvider extends React.PureComponent {
  componentDidMount() {
    if (this.props.locale) {
      moment.locale(this.props.locale)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.locale !== prevProps.locale) {
      moment.locale(this.props.locale)
    }
  }

  render() {
    const { locale, messages, children } = this.props
    return (
      <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
        {React.Children.only(children)}
      </IntlProvider>
    )
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
}

const mapStateToProps = (state) => ({
  locale: LanguageSelectors.makeSelectLocale()(state),
})

export default connect(mapStateToProps)(LanguageProvider)
