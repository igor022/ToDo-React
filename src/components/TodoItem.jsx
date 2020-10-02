import React from 'react';

function TodoItem({ todo }) {
    return(
        <div className={`task ${todo.completed ? 'completed' : ''}`}>
            <button className="check"></button>
            <p>{todo.text}</p>
            <button className="delete"></button>
        </div>
    )
}

export default TodoItem;

