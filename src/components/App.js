import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import InfoWidget from './InfoWidget';

class App extends Component{
  state = {
    todos: [],
    filterMethod: this.filterAll,
  }

  filterAll = () => {
      return true;
  }

  filterActive = (todo) => {
      return !todo.completed;
  }

  filterCompleted = (todo) => {
      return todo.completed;
  }

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

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="container">
          <AddTodo addTodo={this.addTodo}/>
          <TodoList 
            todos={this.state.todos} 
            filterMethod={this.filterAll}
          />
          <InfoWidget />
        </div>
      </div>
    );
  }
}

export default App;
