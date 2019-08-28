import React, { Component } from 'react'

export default ComposedComponent => class Enhance extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { getWeather, weather } = nextProps
    if (!weather.city) getWeather()
  }

  render () {
    return <ComposedComponent {...this.props} />
  }
}