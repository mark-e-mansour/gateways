import { getInitialData, saveGatewayDevice, saveGateway, deleteGateway } from '../utils/api'
import { receiveGateways, updateDevice, addGateway, removeGateway } from './gateways'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ gateways }) => {
        dispatch(receiveGateways(gateways))
        dispatch(hideLoading())
      })
  }
}

export function handleLogging(id) {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(hideLoading())
  }
}

export function handleAddGatewayDevice(id, data) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveGatewayDevice(id, data)
      .then(() => {
        dispatch(updateDevice(data))
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleAddGatewayDevice: ', e)
        alert('The was an error saving device. Try again.')
      })
  }
}

export function handleAddGateway(serialNumber, name, IPAddress) {
  return (dispatch) => {
    dispatch(showLoading())
    const gatewayObject = { serialNumber, name, IPAddress }

    return saveGateway(gatewayObject)
      .then((gateway) => {
        dispatch(addGateway(gateway))
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleAddGateway: ', e)
        alert('The was an error saving gateway. Try again.')
      })
  }
}

export function handleDeleteGateway(id) {
  return (dispatch) => {
    dispatch(showLoading())

    return deleteGateway(id)
      .then((id) => {
        dispatch(removeGateway(id))
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleAddGateway: ', e)
        alert('The was an error deleting gateway. Try again.')
      })
  }
}

export function handleDeleteDevice(id, data) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveGatewayDevice(id, data)
      .then(() => {
        dispatch(updateDevice(data))
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleDeleteDevice: ', e)
        alert('The was an error saving device. Try again.')
      })
  }
}