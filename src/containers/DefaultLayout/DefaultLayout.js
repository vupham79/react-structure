import React, { Suspense, Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinners from '../../components/Spinners'

import navigation from '../../_navs'
import routes from '../../_routes'

const DefaultAside = React.lazy(() => import('./DefaultAside'))
const DefaultFooter = React.lazy(() => import('./DefaultFooter'))
const DefaultHeader = React.lazy(() => import('./DefaultHeader'))

/* eslint-disable react/prefer-stateless-function */
export class DefaultLayout extends Component {
  renderRoutes = (routes = {}, userRole = '') =>
    routes.map(({ key, component: Component, path, name, exact, rolesAccess }) =>
      Component && rolesAccess.includes(userRole) ? (
        <Route
          key={key || path}
          path={path}
          exact={exact}
          name={name}
          render={(props) => <Component {...props} />}
        />
      ) : null,
    )

  render() {
    const { intl, warning, user } = this.props

    return (
      <div className="app">
        <DefaultHeader intl={intl} warning={warning} />
        {/* <Container fluid> */}
        <Suspense fallback={<Spinners pulse />}>
          <Switch>
            {this.renderRoutes(routes)}
            <Redirect to="/404" />
          </Switch>
        </Suspense>
        {/* </Container> */}
        <Suspense fallback={<Spinners pulse />}>
          <DefaultFooter />
        </Suspense>
      </div>
    )
  }
}

DefaultLayout.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
