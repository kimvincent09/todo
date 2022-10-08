import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([])
    function addTodo(todo) {
        if (!todo.text) {
            return
        }
        const newTodos = [todo, ...todos]
      setTodos(newTodos)
    }
    function deleteTask(id) {
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr)
    }
  return (
        <div>
          <h1>TodoList</h1>
          <TodoForm onSubmit={addTodo}  />
      <Todo todos={todos} deleteTask={deleteTask} />
        </div>
  )
}

export default TodoList