import { put, take, select, takeEvery, takeLatest, all, call, fork } from 'redux-saga/effects'
import API from '../../assets/js/api'

export function * increase () {
  while (true) {
    yield take('ADD_TODO')
    const i = yield select(state => state.todos)
    yield put({
      type: 'ADD_TODO_ACTION',
      id: i.length,
      text: i.length + 1
    })
  }
}

export function * getWeather (params: Object) {
  const p = yield call(API.weather, params)
  yield put({
    type: 'GET_WEATHER_SUCCESS',
    results: p.results
  })
}

export function * getPosition () {
  const p = yield call(API.position)
  const { city } = p.data.content.address_detail
  yield put({
    type: 'GET_POSITION_SUCCESS',
    city
  })
  yield fork(getWeather, { city })
}

export function * position () {
  yield take('GET_POSITION')
  yield fork(getPosition)
}

export default function * rootSaga () {
  yield all([
    position(),
    increase()
  ])
}
