import React from 'react'
import { FormattedMessage } from 'react-intl'
// import messages from './containers/DefaultLayout/messages'

const Bar = React.lazy(() => import('./components/Bar'))

const routes = [
  {
    path: '/',
    // name: <FormattedMessage {...messages.Dashboard} />,
    component: Bar,
    rolesAccess: [''],
  },
]

export default routes
