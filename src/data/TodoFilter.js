import { ReduceStore } from 'flux/utils'
import TodoDispatcher from "./TodoDispatcher"
import TodoActionTypes from './TodoActionTypes'

class TodoFilter extends ReduceStore {
  constructor() {
    super(TodoDispatcher)
  }

  getInitialState() {
    return 'all'
  }

  reduce(state, action) {
    switch(action.type) {
      case TodoActionTypes.FILTER_TODOS:
        return action.filter;
      default:
        return state;
    }
  }
}

export default new TodoFilter()