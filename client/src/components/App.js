import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData, handleLogging } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewGateway from './NewGateway'
import Nav from './Nav'
import GatewayView from './GatewayView'
import NewDevice from './NewDevice'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  handleLogOut = (e) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(handleLogging(null))
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.loading === true
              ? <Fragment></Fragment>
              : <Fragment>
                <Nav />
                <Route path='/' exact component={Dashboard} />
                <Route path='/gateways/:id' component={GatewayView} />
                <Route path='/new' component={NewGateway} />
                <Route path='/gateways/:id/new' component={NewDevice} />
              </Fragment>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ devices }) {
  return {
    //loading: devices === null,
    devices
  }
}

export default connect(mapStateToProps)(App)