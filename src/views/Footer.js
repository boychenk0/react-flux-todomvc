import React, { Component } from 'react';
import classnames from 'classnames';
import { capitalize } from '../utils'

class Footer extends Component {

  render() {
    //no render if no items
    if (this.props.todos.size === 0) { return null }

    const remaining = this.props.todos.filter(todo => !todo.complete).size;
    const phrase = remaining === 1 ? ' item left' : ' items left';

    const onFilterTodos = (e) => this.props.onFilterTodos(e.target.dataset.filter);
    const filterTypes = ['all', 'active', 'completed'];

    return (
        <footer id="footer">
          <span id="todo-count">
            <strong>
              {remaining}
            </strong>
            {phrase}
          </span>
          <ul id="filters">
            {filterTypes.map((filter, index) => (
              <li key={index}>
                <span data-filter={filter}
                    onClick={onFilterTodos}
                    className={classnames({'selected': this.props.filter === filter})}>{capitalize(filter)}</span>
              </li>
            ))}
          </ul>
          <button id="clear-completed"
                  onClick={this.props.onDeleteCompletedTodos}>
            Clear completed
          </button>
        </footer>
    )
  }
}

export default Footer