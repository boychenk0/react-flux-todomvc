import React, { Component } from 'react';
import { Container } from 'flux/utils';
import TodoActions from "../data/TodoActions";
import Layout from '../views/Layout';
//stores
import TodoStore from '../data/TodoStore';
import TodoDraftStore from "../data/TodoDraftStore";
import TodoEditStore from "../data/TodoEditStore";
import TodoFilter from '../data/TodoFilter';

class TodoContainer extends Component {

  static getStores() {
    return [
      TodoStore,
      TodoDraftStore,
      TodoEditStore,
      TodoFilter
    ];
  }

  static calculateState(prevState) {
    return {
      //data
      todos: TodoStore.getState(),
      todoDraft: TodoDraftStore.getState(),
      editing: TodoEditStore.getState(),
      filter: TodoFilter.getState(),

      //actions
      onAddTodo: TodoActions.addTodo,
      onToggleTodo: TodoActions.toggleTodo,
      onDeleteTodo: TodoActions.deleteTodo,
      onUpdateTodoDraft: TodoActions.updateTodoDraft,
      onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
      onToggleAllTodos: TodoActions.toggleAllTodos,
      onStartEditTodo: TodoActions.startEditTodo,
      onStopEditTodo: TodoActions.stopEditTodo,
      onEditTodo: TodoActions.editTodo,
      onFilterTodos: TodoActions.filterTodos
    }
  }

  render() {
    return(
      <Layout {...this.state}/>
    )
  }
}

export default Container.create(TodoContainer)