import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Saga from './saga'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  window ? window._initState_ : undefined,
  applyMiddleware(sagaMiddleware)
)

export default store

sagaMiddleware.run(Saga)