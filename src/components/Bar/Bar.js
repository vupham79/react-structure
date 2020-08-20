import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import { compose } from 'redux'
import BarActions, { reducer } from './BarRedux'
import LanguageActions from '../../containers/LanguageProvider/languageRedux'
import saga from './BarSaga'
import messages from './messages'
import { Button } from 'antd'

class Bar extends Component {
  render() {
    const { intl, changeLocale } = this.props
    return (
      <div>
        <FormattedMessage {...messages.greeting} />
        {/* Intl: use FormattedMessage or
          {intl.formatMessage(messages.greeting)}
        */}
        <Button onClick={() => changeLocale('en')}>Change locale</Button>
      </div>
    )
  }
}

Bar.propTypes = {
  // name: PropTypes.string,
}

const mapStateToProps = (state) => ({
  name: state.bar.toJS(),
})

const mapDispatchToProps = (dispatch) => ({
  changeLocale: (lang) => dispatch(LanguageActions.changeLocale(lang)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect, injectIntl)(Bar)
