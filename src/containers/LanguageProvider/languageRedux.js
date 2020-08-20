import { createReducer, createActions } from 'reduxsauce'
import { fromJS } from 'immutable'
import { createSelector } from 'reselect'

import { DEFAULT_LOCALE } from '../../i18n' // eslint-disable-line

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeLocale: ['locale'],
})

export const LanguageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
})

/* ------------- Reducers ------------- */

const changeLocale = (state, { locale }) => state.merge({ locale })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(initialState, {
  [Types.CHANGE_LOCALE]: changeLocale,
})

export const LanguageSelectors = {
  selectLanguage: (state) => (state.language || initialState).toJS(),
  makeSelectLocale() {
    return createSelector(this.selectLanguage, (languageState) => languageState.locale)
  },
}
