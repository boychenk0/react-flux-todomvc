import React, { Component } from 'react'
import TodoItem from './TodoItem'

class MainSection extends Component {
  render() {
    //not render if no items
    if (this.props.todos.size === 0) { return null }

    return (
      <section id="main">
        <button id="toggle-all" onClick={this.props.onToggleAllTodos}/>
        <ul id="todo-list">
          {[...this.props.todos.values()].reverse().map(todo => (
            <TodoItem
              key={todo.id}
              editing={this.props.editing}
              todo={todo}
              onDeleteTodo={this.props.onDeleteTodo}
              onEditTodo={this.props.onEditTodo}
              onStartEditTodo={this.props.onStartEditTodo}
              onStopEditTodo={this.props.onStopEditTodo}
              onToggleTodo={this.props.onToggleTodo}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default MainSection