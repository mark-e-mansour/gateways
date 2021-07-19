import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Gateway extends Component {
  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/gateways/${id}`)
  }
  
  render() {
    const { gateway } = this.props

    if (gateway === null) {
      return <p>This Gateway doesn't existd</p>
    }

    const { name, serialNumber, IPAddress, id, devices } = gateway
    const devicesNumber = devices ? devices.length : 0;

    return (
      <Fragment>
        <div className="card-header"><strong>{name}</strong></div>
        <div className="card-body">
          <div className="row">
            
            <div className='col-md-12'>
              <p>Serial number: {serialNumber}</p>
              <p>IP Address V4: {IPAddress}</p>
              <p>Devices Connected: {devicesNumber}</p>
              <Link to={`/gateways/${id}`} className='btn btn-outline-primary btn-block btn-sm'>View Peripheral Devices</Link>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ gateways }, { id }) {
  const gateway = gateways[id]

  return {
    gateway: gateway
      ? gateway
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Gateway))