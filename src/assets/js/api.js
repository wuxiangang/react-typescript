import http from './fly'
import APIS from '../json/api.json'

const fetch = {}
for (let api of Object.keys(APIS)) {
  const current = APIS[api]
  fetch[api] = (params, configs) => http({
    ...current,
    params,
    configs
  })
}

export default fetch