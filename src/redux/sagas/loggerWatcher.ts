import { all, select, takeEvery, takeLatest } from "redux-saga/effects"
import { IResponse } from "../actionTypes/IResponse"

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state: IResponse = yield select()

    console.log('action', action)
    console.log('state after', state)
  })
}

function* loggerWatcher() {
  yield all([
    watchAndLog()
  ])
}

export default loggerWatcher