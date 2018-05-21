import React, { Component } from 'react'

class Footer extends Component {

  render() {
    //no render if no items
    if (this.props.todos.size === 0) { return null }

    const remaining = this.props.todos.filter(todo => !todo.complete).size;
    const phrase = remaining === 1 ? ' item left' : ' items left';

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {remaining}
          </strong>
          {phrase}
        </span>
        <button id="clear-completed"
                onClick={this.props.onDeleteCompletedTodos}>
          Clear completed
        </button>
      </footer>
    )
  }
}

export default Footer