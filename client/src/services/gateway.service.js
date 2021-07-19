import http from "../http-common"

class GatewayDataService {
  getAll() {
    return http.get("/gateways")
  }

  get(id) {
    return http.get(`/gateways/${id}`)
  }

  create(data) {
    return http.post("/gateways", data)
  }

  update(id, data) {
    return http.put(`/gateways/${id}`, data)
  }

  delete(id) {
    return http.delete(`/gateways/${id}`)
  }

  deleteAll() {
    return http.delete(`/gateways`)
  }

  findByName(name) {
    return http.get(`/gateways?name=${name}`)
  }
}

export default new GatewayDataService()