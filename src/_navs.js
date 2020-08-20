import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ROLES } from './utils/constants'
import messages from './containers/DefaultLayout/messages'

export default {
  items: [
    {
      // name: <FormattedMessage {...messages.Dashboard} />,
      // url: '/dashboard',
      // icon: 'icon-speedometer',
      // rolesAccess: [],
    },
    {
      // name: <FormattedMessage {...messages.Bookings} />,
      // url: '/bookings',
      // icon: 'fa fa-list-alt',
      // rolesAccess: [],
      // children: [
      //   {
      //     name: <FormattedMessage {...messages.NewBooking} />,
      //     url: '/bookings/create',
      //     icon: 'fa fa-circle',
      //     rolesAccess: [ROLES.CLINIC_ADMIN, ROLES.MODERATOR, ROLES.SALE, ROLES.RECEPTIONIST],
      //   },
      // ],
    },
  ],
}
