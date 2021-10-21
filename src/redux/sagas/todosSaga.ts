import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import axios from "axios"
import { ITodo } from "../actionTypes/todosActionTypes"
import { fetchTodosFailure, fetchTodosSuccess, todoTypes } from "../actionCreators/todosActionCreator";
import { IResponse } from "../actionTypes/IResponse";

const getTodos = () => axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");

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