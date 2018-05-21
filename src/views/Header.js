import React, { Component } from 'react'

class Header extends Component {

  render() {
    const onKeyPress = (e) => e.key === 'Enter' ? this.props.onAddTodo(e.target.value) : false;
    const onChange = (e) => this.props.onUpdateTodoDraft(e.target.value);

    return(
      <header id="header">
        <h1>todos</h1>
        <input
          id="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          value={this.props.todoDraft}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </header>
    )
  }
}

export default Header