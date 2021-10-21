import { FetchTodosFailure, FetchTodosFailurePayload, FetchTodosRequest, FetchTodosSuccess, FetchTodosSuccessPayload } from "../actionTypes/todosActionTypes"

export const fetchTodosRequest = (): FetchTodosRequest => ({
  type: todoTypes.FETCH_TODOS_REQUEST
})

export const fetchTodosSuccess = (payload: FetchTodosSuccessPayload): FetchTodosSuccess => ({
  type: todoTypes.FETCH_TODOS_SUCCESS,
  payload
})

export const fetchTodosFailure = (payload: FetchTodosFailurePayload): FetchTodosFailure => ({
  type: todoTypes.FETCH_TODOS_FAILURE,
  payload
})

export enum todoTypes {
  FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE",
}