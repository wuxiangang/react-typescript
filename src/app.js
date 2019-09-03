import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// import Detail from './components/detail'
import Router from './route'

class BasicExample extends Component {
  render () {
    return (<div className='app-container'>
      <Switch>
        {
          Router.map((v, i) => {
            const r = (a, b) => <Route
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