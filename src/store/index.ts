import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Saga from './saga'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
const store: any = createStore(
  rootReducer,
  typeof window !== 'undefined' ? (window as any)['_initState_'] : undefined,
  applyMiddleware(sagaMiddleware)
)
store.run = sagaMiddleware.run

export default store

sagaMiddleware.run(Saga)