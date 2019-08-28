import http from './fly'
import APIS from '../json/api.json'

const fetch = {}
for (let api of Object.keys(APIS)) {
  fetch[api] = params => http({
    ...params,
    api
  })
}

export default fetch