import { RECEIVE_GATEWAYS, UPDATE_DEVICE, ADD_GATEWAY, REMOVE_GATEWAY } from '../actions/gateways'

export default function gateways(state = {}, action) {

  let currentGateways = Object.values(state)

  switch (action.type) {
    case RECEIVE_GATEWAYS:
      return {
        ...state,
        ...action.gateways
      }

    case UPDATE_DEVICE: 
      currentGateways = currentGateways.filter((g) => g.id !== action.gateway.id)
      currentGateways.push(action.gateway)
      return {
        ...currentGateways
      }

    case ADD_GATEWAY:
      const { gateway } = action
      return {
        ...state,
        [gateway.id]: gateway,
      }

    case REMOVE_GATEWAY:
       currentGateways = currentGateways.filter((g) => g.id !== action.id)
      
      return {
        ...currentGateways
      }
    default:
      return state
  }
}