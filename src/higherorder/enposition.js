import React, { Component } from 'react'

export default ComposedComponent => class Enhance extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { weather } = nextProps
    nextProps.dispatch({ type: 'GET_POSITION' })
    // if (!weather.city) getWeather()
  }

  render () {
    return <ComposedComponent {...this.props} />
  }
}