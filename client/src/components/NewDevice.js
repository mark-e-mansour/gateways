import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddGatewayDevice } from '../actions/shared'
import { withRouter, Redirect } from 'react-router-dom'
import { formatDevice } from '../utils/helpers'
import Modal from 'react-bootstrap/Modal'

class NewDevice extends Component {
  state = {
    UID: '',
    vendor: '',
    status: '',
    toPrevious: false,
    hasError: false,
    errorMessage: ''
  }
  handleChangeUID = (e) => {
    const UID = e.target.value

    this.setState(() => ({
      UID
    }))
  }
  handleChangeVendor = (e) => {
    const vendor = e.target.value

    this.setState(() => ({
      vendor
    }))
  }

  handleChangeStatus = (e) => {
    const status = e.target.value

    this.setState(() => ({
      status
    }))
  }

  handleShowLarge = () => {

    this.setState(() => ({
      setSmShow: true
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { UID, vendor, status } = this.state
    const { dispatch, id, gateway } = this.props
    const formattedDevice = formatDevice({ UID, vendor, status })
    if (gateway.devices.length < 10) {
      let saveGateway = true
      let duplicate = gateway.devices.filter((d) => d.UID === UID)
      if (duplicate.length > 0) {
        saveGateway = false
      }

      if (saveGateway) {
        gateway.devices.push(formattedDevice)
        dispatch(handleAddGatewayDevice(id, gateway))

        this.setState(() => ({
          UID: '',
          vendor: '',
          status: '',
          toPrevious: true,
        }))
      } else {
        this.setState(() => ({
          hasError: true,
          errorMessage: "Device UID already exists!"
        }))
      }

    } else {
      this.setState(() => ({
        hasError: true,
        errorMessage: "Maximum Devices capacity reached!"
      }))
    }

  }
  render() {
    const { UID, vendor, status, toPrevious, hasError, errorMessage } = this.state
    const { location } = this.props

    if (toPrevious === true) {
      return <Redirect from="/:url*(/+)" to={location.pathname.slice(0, -4)} />
    }

    return (
      <div className="new-device">
        <Modal
          size="lg"
          show={true}
          onHide={() => this.setState(() => ({ toPrevious: true }))}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Create new device
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {hasError ? <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
              : <Fragment></Fragment>}
            <form className='p-3' onSubmit={this.handleSubmit}>
              <div className="col-md-12">
                <div className="form-group row">
                  <input
                    type="number"
                    placeholder="UID *"
                    value={UID}
                    onChange={this.handleChangeUID}
                    className='form-control'
                    maxLength={280}
                  />
                </div>
                <div className="form-group row">
                  <input
                    type="text"
                    placeholder="vendor *"
                    value={vendor}
                    onChange={this.handleChangeVendor}
                    className='form-control'
                    maxLength={280}
                  />
                </div>
                <div className="form-group row">
                  <select className='form-control' onChange={this.handleChangeStatus} value={status}>
                    <option value="">Status *</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>
                <button
                  className='btn btn-success btn-block mt-5'
                  type='submit'
                  disabled={UID === '' || vendor === '' || status === ''}>
                  Submit
                </button>
              </div>
            </form></Modal.Body>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps({ loadingBar, gateways }, props) {
  const { id } = props.match.params
  const gateway = Object.values(gateways).filter((g) => g.id === id)

  return {
    loadingBar,
    gateway: gateway
      ? gateway[0]
      : null,
    id
  }
}


export default withRouter(connect(mapStateToProps)(NewDevice))