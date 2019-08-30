import React, { Component } from 'react'

export default ComposedComponent => class Enhance extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    // nextProps.dispatch({ type: 'GET_POSITION' })
    return nextProps
  }

  render () {
    return <ComposedComponent {...this.props} />
  }
}