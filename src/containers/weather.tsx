import { connect } from 'react-redux'
import EnPosition from '../higherorder/enposition'
import Weather from '../components/weather'

const mapStateToProps = state => ({ weather: state.weather || {} })
export default connect(mapStateToProps)(EnPosition(Weather))
