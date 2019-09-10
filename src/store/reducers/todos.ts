const todos = (state:[] = [], action: any) => {
  switch (action.type) {
    case 'ADD_TODO_ACTION':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default todos