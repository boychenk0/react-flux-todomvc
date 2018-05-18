import { Container } from 'flux/utils'
import AppView from '../views/App'
import TodoStore from '../data/TodoStore'

function getStores(){
  return [
    TodoStore
  ]
}

function getState(){
  return {
    todos: TodoStore.getState()
  }
}

export default Container.createFunctional(AppView, getStores, getState)