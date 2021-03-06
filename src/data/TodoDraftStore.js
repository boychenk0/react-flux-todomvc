import { ReduceStore } from 'flux/utils'
import TodoDispatcher from "./TodoDispatcher"
import TodoActionsTypes from "./TodoActionTypes"

class TodoDraftStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher)
  }

  getInitialState() {
    return ''
  }

  reduce(state, action) {
    switch(action.type) {

      case TodoActionsTypes.ADD_TODO:
        return '';

      case TodoActionsTypes.UPDATE_TODO_DRAFT:
        return action.text;

      default:
        return state;
    }
  }
}

export default new TodoDraftStore()