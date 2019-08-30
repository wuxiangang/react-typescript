import React, { Component } from 'react'

export default ComposedComponent => class Enhance extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { city } = nextProps.weather
    !city && nextProps.dispatch({ type: 'GET_POSITION' })
    return nextProps
  }

  render () {
    return <ComposedComponent {...this.props} />
  }
}