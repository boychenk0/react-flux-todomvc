import { Container } from 'flux/utils'
import AppView from '../views/App'
import TodoStore from '../data/TodoStore'
import TodoActions from "../data/TodoActions";

function getStores(){
  return [
    TodoStore
  ]
}

function getState(){
  return {
    //data
    todos: TodoStore.getState(),

    //actions
    onToggleTodo: TodoActions.toggleTodo,
    onDeleteTodo: TodoActions.deleteTodo
  }
}

export default Container.createFunctional(AppView, getStores, getState)