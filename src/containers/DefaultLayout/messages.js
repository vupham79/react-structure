/*
 * DefaultLayout Messages
 *
 * This contains all the text for the DefaultLayout container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.DefaultLayout'

export default defineMessages({
  vietnamese: {
    id: `${scope}.vietnamese`,
    defaultMessage: 'Tiếng Việt',
  },
  english: {
    id: `${scope}.english`,
    defaultMessage: 'English',
  },
  SupportedLanguages: {
    id: `${scope}.SupportedLanguages`,
    defaultMessage: 'Supported languages',
  },
})
