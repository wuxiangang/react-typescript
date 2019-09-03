import Loadable from 'react-loadable'
import * as saga from '../store/saga'

const ssr = true

const loadable = filename => Loadable({
  loader: () => import(`../${filename}`),
  loading: () => ('')
})

const setComponent = filename => {
  return ssr ? require(`../${filename}`).default
    : loadable(filename)
}

const routers = [{
  path: '/weather',
  // exact: true,
  type: 'GET_POSITION',
  fetch: saga.getPosition,
  component: setComponent('containers/weather')
}, {
  path: '/todos/:id',
  // exact: true,
  component: setComponent('containers/todos')
}, {
  path: '/detail',
  component: setComponent('containers/detail'),
  children: [{
    path: '/detail',
    exact: true,
    component: setComponent('components/detail1')
  },
  {
    path: '/detail/a2',
    component: setComponent('components/detail2')
  }]
}]

export default routers
