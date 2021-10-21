import { all, fork } from "redux-saga/effects"
import loggerWatcher from "./loggerWatcher"
import todosSaga from "./todosSaga"

export default function* rootSaga() {
  yield all([
    fork(loggerWatcher),
    fork(todosSaga),
  ])
}