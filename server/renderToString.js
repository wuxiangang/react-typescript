import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { matchPath, StaticRouter } from 'react-router-dom'
import routes from '../src/route'
import App from '../src/app'
import initStore from '../src/store'
import env from './env'

const store = initStore()
const matchRoute = async ctx => {
  const activeRoute = routes.find(route => matchPath(ctx.req.url, route)) || { props: {} }
  console.log(activeRoute)
  const data = await (!!activeRoute.fetch ? store.dispatch(activeRoute.fetch()) : Promise.resolve(null))
  return data
}

const setToString = string => {
  return `
    <html lang=en>
      <head>
        <meta charset=utf-8>
        <title>How to set up React, Webpack4, and Babel7</title>
        <script type=text/javascript src=https://unpkg.com/react@16/umd/react.production.min.js></script>
        <script type=text/javascript src=https://unpkg.com/react-dom@16/umd/react-dom.production.min.js></script>
        <script src=https://cdn.bootcss.com/react-router-dom/5.0.1/react-router-dom.min.js></script>
        <script src=${env.webpackPath}/js/prop-types.min.js></script>
        <link href=${env.webpackPath}/css/main.css rel=stylesheet />
      </head>
      <body>
        <div class=container id=app>${string}</div>
         <script>window._initState_ = ${JSON.stringify(store.getState()).replace(/</g, '\\x3c')}</script>
         <script type=text/javascript src=${env.webpackPath}/js/vendor.dll.js></script>
         <script type=text/javascript src=${env.webpackPath}/js/vendor.js></script>
         <script type=text/javascript src=${env.webpackPath}/js/main.js></script>
      </body>
    </html>`
}

export default async ctx => {
  const context = { data: await matchRoute(ctx) }
  const string = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )
  return setToString(string)
}