import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddGateway } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewGateway extends Component {
  state = {
    serialNumber: '',
    name: '',
    IPAddress: '',
    toHome: false,
    errorMessage: '',
    hasError: false
  }
  handleChangeSerialNumber = (e) => {
    const serialNumber = e.target.value

    this.setState(() => ({
      serialNumber
    }))
  }
  handleChangeName = (e) => {
    const name = e.target.value

    this.setState(() => ({
      name
    }))
  }

  handleChangeIPAddress = (e) => {
    const IPAddress = e.target.value

    this.setState(() => ({
      IPAddress
    }))
  }

  checkIPAddress(ip) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
      return true
    } else {
    return false
  }
  }
  
  checkSerialUnique(serialNumber) {
    const { gateways } = this.props
    let duplicate = Object.values(gateways).filter((g) => g.serialNumber === serialNumber)
    if (duplicate.length > 0) {
      return false
    } else {
      return true
     }
      
  }

handleSubmit = (e) => {
  e.preventDefault()

  const { serialNumber, name, IPAddress } = this.state
  const { dispatch } = this.props

  let checkSave = true
  let errorMsg = ''

  if (!this.checkIPAddress(IPAddress)) {
    checkSave = false
    errorMsg = '- IP Address is not a valid IP v4.\r\n'
  }
  
  if (!this.checkSerialUnique(serialNumber)) {
    checkSave = false
    errorMsg = errorMsg.concat('- Serial Number is already used please check your Dashboard.');
   }

  if (checkSave) {
    dispatch(handleAddGateway(serialNumber, name, IPAddress))
    this.setState(() => ({
      serialNumber: '',
      IPAddress: '',
      name: '',
      toHome: true,
    }))
  } else {
    this.setState(() => ({
      errorMessage: errorMsg,
      hasError: true
    }))
  }

}
render() {
  const { serialNumber, name, IPAddress, toHome, hasError, errorMessage } = this.state

  if (toHome === true) {
    return <Redirect to='/' />
  }

  return (
    <div className="new-gateway">
      <div className="col-md-12 mt-3 mb-3">
        <h3 className='text-center'>Create new gateway</h3>
      </div>
      <div className="card mt-3 bg-dark text-light col-md-8 offset-md-2">
        <div className="card-header">
          <h4 className='center'>Gateway Settings:</h4>
        </div>
        <div className="card-body">
          {hasError ? <div className="alert alert-danger"  style={{whiteSpace: "pre-line"}} role="alert">
            {errorMessage}
          </div>
            : <Fragment></Fragment>}
          <form className='p-3' onSubmit={this.handleSubmit}>
            <div className="col-md-12">
              <div className="form-group row">
                <input
                  type="text"
                  placeholder="Serial Number *"
                  value={serialNumber}
                  onChange={this.handleChangeSerialNumber}
                  className='form-control'
                  maxLength={280}
                />
              </div>
              <div className="form-group row">
                <input
                  type="text"
                  placeholder="Name *"
                  value={name}
                  onChange={this.handleChangeName}
                  className='form-control'
                  maxLength={280}
                />
              </div>
              <div className="form-group row">
                <input
                  type="text"
                  placeholder="IPv4 address *"
                  value={IPAddress}
                  onChange={this.handleChangeIPAddress}
                  className='form-control'
                  maxLength={280}
                />
              </div>
              <button
                className='btn btn-success btn-block mt-5'
                type='submit'
                disabled={serialNumber === '' || name === '' || IPAddress === ''}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
}

function mapStateToProps({ gateways }) {

  return {
    gateways
  }
}

export default connect(mapStateToProps)(NewGateway)