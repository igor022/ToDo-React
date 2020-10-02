import React from 'react';

function TodoItem({ todo, checkTodo, deleteTodo }) {
    return(
        <div className={`task ${todo.completed ? 'completed' : ''}`}>
            <button className="check" onClick={() => checkTodo(todo.id)}></button>
            <p>{todo.text}</p>
            <button className="delete" onClick={() => deleteTodo(todo.id)}></button>
        </div>
    )
}

export default TodoItem;

