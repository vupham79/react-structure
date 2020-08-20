import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { translationMessages } from './i18n'
import configureStore from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import LanguageProvider from './containers/LanguageProvider'
import { ConnectedRouter } from 'connected-react-router/immutable'
import history from './utils/history'

// Create redux store with history
const initialState = {}
const { store, persistor } = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root') //eslint-disable-line

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LanguageProvider messages={translationMessages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </PersistGate>
  </Provider>,
  MOUNT_NODE,
)
