import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import InfoWidget from './InfoWidget';

class App extends Component{
  state = {
    todos: [],
    filterMethod: this.filterAll,
  }

  filterTodo = (todo) => this.state.filterMethod(todo);

  filterAll = () => true;

  filterActive = (todo) => !todo.completed;

  filterCompleted = (todo) => todo.completed;

  addTodo = (text) => {
    const todo = {
      text,
      completed: false,
      id: Math.random()
    };

    this.setState((state) => ({
      todos: [...state.todos, todo]
    }));
  }

  changeTodoStatus = (id, status) => {
    const todoIndex = this.state.todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      const todo = {...this.state.todos[todoIndex], completed: status};
      const updatedTodos = [...this.state.todos];
      updatedTodos.splice(todoIndex, 1, todo);

      this.setState({
        todos: updatedTodos
      })
    }
  }

  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: updatedTodos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="container">
          <AddTodo addTodo={this.addTodo}/>
          <div className="todos" id="todos">
            {
              this.state.todos
                .map((todo) => 
                  <TodoItem 
                    todo={todo} 
                    changeTodoStatus={this.changeTodoStatus} 
                    deleteTodo={this.deleteTodo}
                    key={todo.id}
                  />
                )
            }
          </div>
          <InfoWidget todoCount={this.state.todos.filter((todo) => !todo.completed).length}/>
        </div>
      </div>
    );
  }
}

export default App;
