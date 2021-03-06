// @flow
import React from 'react'
import {withRouter} from 'next/router'
import {ThemeProvider} from 'styled-components'
import SearchBoss from './SearchBoss'
import Layout from './Layout'
import theme from '../theme'

type Props = {
  router: Object,
  initialSearchState: Object,
  initialResultsState: Object,
}

class App extends React.Component<Props> {
  componentDidMount() {
    this.prefetchResources()

    this.props.router.onRouteChangeComplete = () => {
      if (window.location.host === 'glutenproject.com') {
        window.gtag && window.gtag('event', 'page_view')
      }
    }
  }

  componentDidCatch(error: any, errorInfo: any) {
    if (window.Raven) {
      window.Raven.captureException(error, {extra: errorInfo})
    }
  }

  prefetchResources = async () => {
    setTimeout(() => {
      this.props.router.prefetch('/search')
    }, 0)

    setTimeout(() => {
      this.props.router.prefetch('/')
      this.props.router.prefetch('/product')
      this.props.router.prefetch('/gluten-free-meal-delivery')
      this.props.router.prefetch('/who')
    }, 1500)
  }

  render() {
    const {router, ...props} = this.props
    return (
      //$FlowFixMe
      <React.unstable_AsyncMode>
        <ThemeProvider theme={theme}>
          <SearchBoss
            q={router && router.query.q}
            initialSearchState={this.props.initialSearchState}
            initialResultsState={this.props.initialResultsState}
          >
            <Layout {...props} />
          </SearchBoss>
        </ThemeProvider>
      </React.unstable_AsyncMode>
    )
  }
}

export default withRouter(App)
