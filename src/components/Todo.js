import React from 'react'

function Todo({ todos, deleteTask }) {
  return (
    <ul>
      {todos.map(todo =>
        <li id={todo.id}>
          <label>  
              <input type="checkbox"/>
            {todo.text} <span className="delete" id={todo.id} onClick={()=>deleteTask(todo.id)}>X</span>
          </label>
        </li>
    )}
  </ul>
  )
}

export default Todo