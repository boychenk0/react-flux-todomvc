import React from 'react';
import '../stylesheets/App.css';
import classnames from 'classnames';

function App(props) {
  return (
    <div>
      <Header {...props}/>
      <Main {...props}/>
      <Footer {...props}/>
    </div>
  )
}

function Header(props) {
  return (
    <header id="header">
      <h1>todos</h1>
      <input
        id="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={props.todoDraft}
        onChange={(e) => props.onUpdateTodoDraft(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? props.onAddTodo(e.target.value) : false}
      />
    </header>
  )
}

function Main(props) {
  if (props.todos.size === 0) { return null }

  return (
    <section id="main">
      <button id="toggle-all" onClick={props.onToggleAllTodos}/>
      <ul id="todo-list">
        {[...props.todos.values()].reverse().map(todo => (
          <TodoItem
            key={todo.id}
            editing={props.editing}
            todo={todo}
            onDeleteTodo={props.onDeleteTodo}
            onEditTodo={props.onEditTodo}
            onStartEditTodo={props.onStartEditTodo}
            onStopEditTodo={props.onStopEditTodo}
            onToggleTodo={props.onToggleTodo}
          />
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  if (props.todos.size === 0) { return null }

  const remaining = props.todos.filter(todo => !todo.complete).size;
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
              onClick={props.onDeleteCompletedTodos}>
        Clear completed
      </button>
    </footer>
  )
}

function TodoItem(props) {
  const {editing, todo} = props;
  const isEditing = editing === todo.id;
  const onToggleTodo = () => props.onToggleTodo(todo.id);
  const onDeleteTodo = () => props.onDeleteTodo(todo.id);
  const onStartEditTodo = () => props.onStartEditTodo(todo.id);

  let input = null;
  if (isEditing) {
    const onChange = (e) => props.onEditTodo(todo.id,
      e.target.value);
    const onStopEditTodo = props.onStopEditTodo;
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

export default App;
