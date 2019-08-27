import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Router from './route'

class BasicExample extends Component {
  render () {
    return (<div className='app-container'>
      <Switch>
        {
          Router.map((v, i) => {
            return (
              <Route
                key = { i }
                exact = { v.exact }
                path = { v.path }
                component = { v.component }
              />
            )
          })
        }
      </Switch>
    </div>)
  }
}

export default BasicExample