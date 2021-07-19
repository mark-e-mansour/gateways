export const RECEIVE_GATEWAYS = 'RECEIVE_GATEWAYS'
export const UPDATE_DEVICE = 'UPDATE_DEVICE'
export const ADD_GATEWAY = 'ADD_GATEWAY'
export const REMOVE_GATEWAY = 'DELETE_GATEWAY'

export function receiveGateways(gateways) {
  return {
    type: RECEIVE_GATEWAYS,
    gateways,
  }
}

export function updateDevice(gateway) {
  return {
    type: UPDATE_DEVICE,
    gateway
  }
}

export function addGateway(gateway) {
  return {
    type: ADD_GATEWAY,
    gateway,
  }
}

export function removeGateway(id) {
  return {
    type: REMOVE_GATEWAY,
    id
  }
}