import { connect } from 'react-redux'
import Detail from '../components/detail'

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps)(Detail)