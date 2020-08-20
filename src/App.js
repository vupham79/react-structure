import React, { Component, Suspense } from 'react'
import Spinners from './components/Spinners'
import { Switch, Route } from 'react-router-dom'
const Page404 = React.lazy(() => import('./containers/Page404'))
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'))

class App extends Component {
  render() {
    const { intl } = this.props
    return (
      <div>
        <Suspense fallback={<Spinners pulse />}>
          <Switch>
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route
              path="/"
              name="DefaultLayout"
              render={(props) => <DefaultLayout {...props} intl={intl} />}
            />
          </Switch>
        </Suspense>
      </div>
    )
  }
}

export default App
