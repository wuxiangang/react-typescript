import React, { Component, ComponentType } from 'react'

interface Weather {
  weather: {
    city: string
  },
  dispatch(a: object): any
}

export default <P extends object>(ComposedComponent: ComponentType<P>) => 
class Enhance extends Component<P & Weather> {
  static getDerivedStateFromProps (nextProps: Weather, prevState) {
    const { city } = nextProps.weather
    !city && nextProps.dispatch({ type: 'GET_POSITION' })
    return nextProps
  }

  render () {
    return <ComposedComponent {...this.props as P} />
  }
}
