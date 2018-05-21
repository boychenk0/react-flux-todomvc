import { Container } from 'flux/utils'
import AppView from '../views/App'
import TodoStore from '../data/TodoStore'
import TodoActions from "../data/TodoActions";
import TodoDraftStore from "../data/TodoDraftStore";

function getStores(){
  return [
    TodoStore,
    TodoDraftStore
  ]
}

function getState(){
  return {
    //data
    todos: TodoStore.getState(),
    todoDraft: TodoDraftStore.getState(),

    //actions
    onAddTodo: TodoActions.addTodo,
    onToggleTodo: TodoActions.toggleTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onUpdateTodoDraft: TodoActions.updateTodoDraft,
    onDeleteCompletedTodos: TodoActions.deleteCompletedTodos
  }
}

export default Container.createFunctional(AppView, getStores, getState)