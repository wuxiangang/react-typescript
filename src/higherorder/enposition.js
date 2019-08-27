import React, { Component } from 'react'

export default ComposedComponent => class Enhance extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const { getWeather, weather } = this.props
    if (!weather.city) getWeather()
  }

  render () {
    return <ComposedComponent {...this.props} />
  }
}