import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { getTodos } from "../../utils/services/todosAPI";
import { fetchTodosFailure, fetchTodosSuccess, todoTypes } from "../actionCreators/todosActionCreator";
import { IResponse } from "../actionTypes/IResponse";

function* fetchTodosSaga() {
  try {
    const response: IResponse = yield call(getTodos)
    yield put(
      fetchTodosSuccess({ todos: response.data })
    )
  } catch (error) {
    yield put(
      fetchTodosFailure({ error: (error as Error).message })
    )
  }
}

function* todosSaga() {
  yield all([
    takeLatest(todoTypes.FETCH_TODOS_REQUEST, fetchTodosSaga),
  ])
}

export default todosSaga