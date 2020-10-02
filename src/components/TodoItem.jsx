import React from 'react';

function TodoItem({ todo, changeTodoStatus, deleteTodo }) {
  return(
    <div className={`task ${todo.completed ? 'completed' : ''}`}>
      <button className="check" onClick={() => changeTodoStatus(todo.id, !todo.completed)}></button>
      <p>{todo.text}</p>
      <button className="delete" onClick={() => deleteTodo(todo.id)}></button>
    </div>
  )  
}

export default TodoItem;

