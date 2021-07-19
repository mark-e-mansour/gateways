import React, { Component } from 'react'
import { connect } from 'react-redux'
import Gateway from './Gateway'

class Dashboard extends Component {
  render() {
    const { loadingBar, gatewaysIds } = this.props
    if (loadingBar.default) {
      return <div className="card text-white bg-info mt-3 p-3 w-100">
        Please wait...    </div>
    }

    return (
      <div className="dashboard">
        <div className="col-md-12 mt-3 mb-3">
          <h3 className='text-center'>Dashboard</h3>
        </div>

        <div className='col-md-12'>
          <div className="card p-4">
            <div className="row">
              {this.props.gatewaysIds.length > 0 ? gatewaysIds.map((id) => (
                <div className="card mb-3 bg-dark text-light col-md-12" key={id}>
                  <Gateway id={id} />
                </div>
              ))
                : <div className="card text-white bg-info mb-3 p-3 w-100">
                  No Gateways found
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ gateways, loadingBar }) {
  return {
    gatewaysIds: Object.keys(gateways)
      .sort((a, b) => gateways[b].name - gateways[a].name),
    gateways,
    loadingBar
  }
}

export default connect(mapStateToProps)(Dashboard)