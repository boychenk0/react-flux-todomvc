import { ReduceStore } from 'flux/utils'
import TodoDispatcher from "./TodoDispatcher"
import TodoActionTypes from './TodoActionTypes'


class TodoEditStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher)
  }

  getInitialState() {
    return ''
  }

  reduce(state, action) {
    switch(action.type) {

      case TodoActionTypes.START_EDIT_TODO:
        return action.id;

      case TodoActionTypes.STOP_EDIT_TODO:
        return '';

      default:
        return state;
    }
  }
}

export default new TodoEditStore()