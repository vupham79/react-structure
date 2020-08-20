/*
 * Bar Messages
 *
 * This contains all the text for the Bar component.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.components.Bar'

export default defineMessages({
  greeting: {
    id: `${scope}.greeting`,
    defaultMessage: 'Hello',
  },
})
