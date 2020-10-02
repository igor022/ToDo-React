import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  filterTodo = (todo) => {
    return (
      this.props.filterMethod(todo)
    );
  }

  render() {
    return(
      <div className="todos" id="todos">
        {
          this.props.todos
            .map((todo) => <TodoItem todo={todo} key={todo.id}/>)
        }
      </div>
    )
  }
}

export default TodoList;