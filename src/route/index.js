import Loadable from 'react-loadable'

const ssr = true

const loadable = filename => Loadable({
  loader: () => import(`@/containers/${filename}`),
  loading: () => ('')
})

const setComponent = filename => {
  return ssr ? require(`../containers/${filename}`).default
    : loadable(filename)
}

import * as saga from '../store/saga'

const routers = [{
  path: '/weather',
  // exact: true,
  type: 'GET_POSITION',
  fetch: saga.getPosition,
  component: setComponent('weather')
}, {
  path: '/todos/:id',
  // exact: true,
  component: setComponent('todos')
}]

export default routers
