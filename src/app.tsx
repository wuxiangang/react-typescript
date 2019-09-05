import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './route'
console.log(routes)
interface R {
  exact?: boolean | undefined,
  path: string,
  component: any
}

class BasicExample extends Component {
  render () {
    return (<div className='app-container'>
      <Switch>
        {
          routes.map((v, i) => {
            const r = (a: R, b: number) => <Route
              key = { b }
              exact = { a.exact }
              path = { a.path }
              component = { a.component }
            />
            return (
              !v.children ? r(v, i) : <Route
                path = { v.path }
                render = {() => <v.component>
                  { v.children.map((k, j) => r(k, j)) }
                </v.component>
                }
              />
            )
          })
        }
      </Switch>
    </div>)
  }
}

export default BasicExample