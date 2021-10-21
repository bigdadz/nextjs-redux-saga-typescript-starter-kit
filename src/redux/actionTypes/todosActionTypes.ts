import { todoTypes } from "../actionCreators/todosActionCreator";

export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TodosState {
  pending: boolean
  todos: ITodo[]
  error: string | null
}

export interface FetchTodosRequest {
  type: typeof todoTypes.FETCH_TODOS_REQUEST
}

export interface FetchTodosSuccessPayload {
  todos: ITodo[]
}

export interface FetchTodosFailurePayload {
  error: string
}

export interface FetchTodosSuccess {
  type: typeof todoTypes.FETCH_TODOS_SUCCESS
  payload: FetchTodosSuccessPayload
}

export interface FetchTodosFailure {
  type: typeof todoTypes.FETCH_TODOS_FAILURE
  payload: FetchTodosFailurePayload
}

export type TodosActions =
  | FetchTodosRequest
  | FetchTodosSuccess
  | FetchTodosFailure