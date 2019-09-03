import React, { Component } from 'react'

class Detail1 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.children)
    return (
      <div>
        111111111
      </div>
    )
  }
}
export default Detail1