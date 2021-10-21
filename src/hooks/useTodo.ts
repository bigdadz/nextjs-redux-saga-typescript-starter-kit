import { useDispatch, useSelector } from "react-redux"
import { fetchTodosRequest } from "../redux/actionCreators/todosActionCreator"
import { RootState } from "../redux/reducers/rootReducer"

const useTodo = () => {
  const dispatch = useDispatch()
  const { pending, todos, error } = useSelector(
    (state: RootState) => state.todos
  )

  const fetchTodos = () => dispatch(fetchTodosRequest())

  return {
    todos,
    fetchTodos,
  }
}

export default useTodo