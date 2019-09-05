import { connect } from 'react-redux'
import TodosList from '../components/todosList'

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps)(TodosList)