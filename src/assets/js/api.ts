import http from './fly'
import * as APIS from '../json/api.json'

const fetch: any = {}
for (let api of Object.keys(APIS)) {
  const current = (APIS as any)[api]
  fetch[api] = (params: Object, configs: any) => http({
    ...current,
    params,
    configs
  })
}

export default fetch