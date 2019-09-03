import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Detail extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <button>添加todos</button>
        { this.props.children }
      </div>
    )
  }
}

export default Detail