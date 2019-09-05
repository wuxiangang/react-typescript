import React, { Component } from 'react'
const initialState = { loading: true }
type State = Readonly<typeof initialState>

export default class TodosList extends Component<any, State> {
  state: State = initialState
  render () {
    const { dispatch } = this.props
    return (
      <div>
        <button onClick={ dispatch.bind(this, { type: 'ADD_TODO' }) }>添加todos</button>
        <ul>
          {
            this.props.todos.map((v, i) => {
              return <li key={i}>{ v.id }</li>
            })
          }
        </ul>
      </div>
    )
  }
}
