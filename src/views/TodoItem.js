import React, { Component } from 'react';
import classnames from 'classnames';

class TodoItem extends Component {

  render() {
    const {editing, todo} = this.props;
    const isEditing = editing === todo.id;
    const onToggleTodo = () => this.props.onToggleTodo(todo.id);
    const onDeleteTodo = () => this.props.onDeleteTodo(todo.id);
    const onStartEditTodo = () => this.props.onStartEditTodo(todo.id);

    let input = null;
    if (isEditing) {
      const onChange = (e) => this.props.onEditTodo(todo.id,
        e.target.value);
      const onStopEditTodo = this.props.onStopEditTodo;
      const onKeyDown = (e) => {
        if (e.keyCode === 13) {
          onStopEditTodo();
        }
      };
      input =
        <input
          autoFocus={true}
          className="edit"
          value={todo.text}
          onBlur={onStopEditTodo}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
    }

    return(
      <li className={classnames({
        completed: todo.complete,
        editing: isEditing
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={onToggleTodo}
          />
          <label onDoubleClick={onStartEditTodo}>{todo.text}</label>
          <button
            className="destroy"
            onClick={onDeleteTodo}
          />
        </div>
        {input}
      </li>
  )
  }
}

export default TodoItem