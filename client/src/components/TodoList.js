import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { getTodosAsync } from '../redux/todoSlice'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodosAsync())
  }, [dispatch])

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  )
}

export default TodoList
