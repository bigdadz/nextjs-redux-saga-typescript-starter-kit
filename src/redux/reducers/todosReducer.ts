import { todoTypes } from "../actionCreators/todosActionCreator"
import { TodosActions, TodosState } from "../actionTypes/todosActionTypes"

const initialState: TodosState = {
  pending: false,
  todos: [],
  error: null
}

const todoReducer = (state = initialState, action: TodosActions) => {
  switch (action.type) {
    case todoTypes.FETCH_TODOS_REQUEST:
      return { ...state, pending: true }
    case todoTypes.FETCH_TODOS_SUCCESS:
      return { 
        ...state, 
        pending: false, 
        todos: action.payload.todos 
      }
    case todoTypes.FETCH_TODOS_FAILURE:
      return { 
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error
      }

    default:
      return { ...state }
  }
}

export default todoReducer