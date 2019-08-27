import Loadable from 'react-loadable'
import * as Action from '../store/actions'

const ssr = true

const loadable = filename => Loadable({
  loader: () => import(`@/containers/${filename}`),
  loading: () => ('')
})

const setComponent = filename => {
  return ssr ? require(`../containers/${filename}`).default
    : loadable(filename)
}

const routers = [{
  path: '/',
  exact: true,
  fetch: Action.getWeather,
  component: setComponent('weather')
}, {
  path: '/todos/:id',
  // exact: true,
  component: setComponent('todos')
}]

export default routers
