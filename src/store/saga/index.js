import { put, take, select, takeEvery, all, call, fork } from 'redux-saga/effects'
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

export function * getWeather (params) {
  const p = yield call(API.weather, params)
  yield put({
    type: 'GET_WEATHER_SUCCESS',
    results: p.results
  })
}

export function * getPosition () {
  yield take('GET_POSITION')
  const p = yield call(API.position)
  const city = p.data.content.address_detail.city
  yield put({
    type: 'GET_POSITION_SUCCESS',
    city
  })
  // const a = yield select(state => state.weather)
  yield fork(getWeather, { city })
}

export default function * rootSaga () {
  yield all([
    getPosition(),
    increase()
  ])
}
