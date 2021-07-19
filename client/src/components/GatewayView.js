import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleDeleteGateway } from '../actions/shared'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { withRouter } from 'react-router-dom'
import { BsPlusSquare, BsTrashFill } from 'react-icons/bs'
import Device from './Device'
import { Link, Redirect } from 'react-router-dom'

class GatewayView extends Component {

    toParent = (e, id) => {
        e.preventDefault()
        this.props.history.push(`/gateways/${id}`)
    }

    state = {
        toHome: false,
    }

    handleDeleteGateway = (id) => {
        const { dispatch } = this.props

        dispatch(handleDeleteGateway(id))
        this.setState(() => ({
            toHome: true,
        }))
    }

    render() {
        const { toHome } = this.state
        const { gateway, loadingBar } = this.props

        if (toHome === true) {
            return <Redirect to='/' />
          }

        if (gateway === null || gateway === undefined) {
            if (loadingBar.default) {
                return <div className="card text-white bg-info mt-3 p-3 w-100">
                    Please wait...    </div>
            }

            return <div className="card text-white bg-info mt-3 p-3 w-100">
                This Gateway doesn not exist    </div>
        }
        const { id, name, serialNumber, IPAddress, devices } = gateway
        const devicesNumber = devices ? devices.length : 0
        const devicePercentage = devicesNumber > 0 ? Math.round((devicesNumber / 10) * 100) : 0

        return (
            <div className="gateway-view col-md-12">
                <div className="card mt-3 bg-dark text-light">
                    <div className="card-header"><b style={{fontSize: "1.5em"}}>{name}</b> <div className="float-right">
                        <div className="btn-group">
                            <button type="button" className="btn btn-danger" onClick={() => this.handleDeleteGateway(id)}>Delete <BsTrashFill /></button>
                            <Link to={`/gateways/${id}/new`} className='btn btn-primary'>Add Device <BsPlusSquare /></Link>
                        </div> </div></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h4>Gateway Details</h4>
                                    <p>Serial Number: {serialNumber} <br />
                                        name: {name}<br />
                                        IPv4 Address: {IPAddress}</p>
                                    {devicesNumber !== 0
                                        ? <div><hr></hr> <h4>Devices</h4>
                                            <div className="row">
                                                {this.props.devicesIds.map((device) => (
                                                    <div className="card mb-3 bg-dark text-light col-md-4" key={device.id}>
                                                        <Device parentGateway={gateway} device={device} id={device.id} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        : <Fragment></Fragment>
                                    }

                                    <h5>Available Capacity</h5>
                                    {devicesNumber === 10 ? <ProgressBar variant="danger" striped now={100} label="Gateway is fully occupied" />
                                        : <ProgressBar animated now={100 - devicePercentage} label={`${100 - devicePercentage}%`} />}

                                    {devicesNumber !== 0
                                        ? (<p className="mt-3 text-center">{devicesNumber} out of 10 devices connected</p>)
                                        : (<p className="mt-3 text-center">No devices connected</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ gateways, loadingBar }, props) {
    const { id } = props.match.params
    const gateway = Object.values(gateways).filter((g) => g.id === id)
    const connectedDevices = gateway[0] ? gateway[0].devices : []
    return {
        gateway: gateway
            ? gateway[0]
            : null,
        devicesIds: connectedDevices,
        loadingBar
    }
}

export default withRouter(connect(mapStateToProps)(GatewayView))