import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from './utils/history'
import { reducer as Bar } from './components/Bar/BarRedux'
import { reducer as language } from './containers/LanguageProvider/languageRedux'
export default (injectedReducers = {}) =>
  connectRouter(history)(
    combineReducers({
      bar: Bar,
      language,
      router: connectRouter(history),
      ...injectedReducers,
    }),
  )
