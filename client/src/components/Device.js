import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { BsTrashFill } from 'react-icons/bs'
import { handleDeleteDevice } from '../actions/shared'

class Device extends Component {

    handleDeleteDevice = () => {
        const { dispatch, parentGateway, device } = this.props
        parentGateway.devices = parentGateway.devices.filter((d) => d.id !== device.id)
        dispatch(handleDeleteDevice(parentGateway.id, parentGateway))
    }

    render() {
        const { device } = this.props
        const { UID, vendor, date, status } = device
        const statusColor = status === "Online" ? "text-success" : "text-danger"
        return (
            <Fragment>
                <div className="card-body">
                <div className="float-right">
                        <button type="button" className="btn btn-danger" onClick={() => this.handleDeleteDevice()}>Delete <BsTrashFill /></button>
                    </div>
                    <div className="row">
                            <div className="col-md-11 offset-md-1">
                                <h5><strong className={statusColor}>{status}</strong></h5>
                                <p>UID: {UID}</p>
                                <p>Vendor: {vendor}</p>
                                <p>Created On {formatDate(date)}</p>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

function mapStateToProps({}, { device, parentGateway }) {
    return {
        device,
        parentGateway
    }
}

export default connect(mapStateToProps)(Device)