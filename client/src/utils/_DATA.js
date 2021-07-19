import GatewayDataService from "../services/gateway.service";

export function _getGateways() {
  return new Promise(async (res, rej) => {
    try {
      const newGateways = await GatewayDataService.getAll()
      const results = newGateways.data

      res([...results])
    } catch (err) {
      res(err)
    }
  })
}

export function _saveGateway(gateway) {
  return new Promise(async (res, rej) => {
    try {
      let newGateway = await GatewayDataService.create(gateway);
      newGateway = newGateway.data
      res(newGateway)
    } catch (err) {
      res(err)
    }
  })
}

export function _deleteGateway(id) {
  return new Promise(async (res, rej) => {
    try {
      await GatewayDataService.delete(id)
      res(id)
    } catch (err) {
      res(err)
    }
  })
}

export function _saveGatewayDevice(id, data) {
  return new Promise(async (res, rej) => {
    try {
      const newGateway = await GatewayDataService.update(id, data)
      res(newGateway.data)
    } catch (err) {
      res(err)
    }
  })
}