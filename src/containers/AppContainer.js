import { Container } from 'flux/utils'
import AppView from '../views/App'
import TodoStore from '../data/TodoStore'
import TodoActions from "../data/TodoActions";
import TodoDraftStore from "../data/TodoDraftStore";
import TodoEditStore from "../data/TodoEditStore";

function getStores(){
  return [
    TodoStore,
    TodoDraftStore,
    TodoEditStore
  ]
}

function getState(){
  return {
    //data
    todos: TodoStore.getState(),
    todoDraft: TodoDraftStore.getState(),
    editing: TodoEditStore.getState(),

    //actions
    onAddTodo: TodoActions.addTodo,
    onToggleTodo: TodoActions.toggleTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onUpdateTodoDraft: TodoActions.updateTodoDraft,
    onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
    onToggleAllTodos: TodoActions.toggleAllTodos,
    onStartEditTodo: TodoActions.startEditTodo,
    onStopEditTodo: TodoActions.stopEditTodo,
    onEditTodo: TodoActions.editTodo
  }
}

export default Container.createFunctional(AppView, getStores, getState)