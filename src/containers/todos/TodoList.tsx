import { useEffect } from 'react'
import useTodo from '../../hooks/useTodo'

const TodoList = () => {
  const { todos, fetchTodos } = useTodo()

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      { 
        todos.map((value) => (
          <p key={value.id}>{value.title}</p>
        ))}
    </>
  )
}

export default TodoList