import {
  _getGateways,
  _saveGateway,
  _saveGatewayDevice,
  _deleteGateway
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getGateways(),
  ]).then(([gateways]) => ({
    gateways,
  }))
}

export function saveGateway (gateway) {
  return _saveGateway(gateway)
}

export function saveGatewayDevice (id, data) {
  return _saveGatewayDevice(id, data)
}

export function deleteGateway(id) {
  return _deleteGateway(id)
}