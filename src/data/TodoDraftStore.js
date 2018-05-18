import { ReduceStore } from 'flux/utils'
import TodoDispatcher from "./TodoDispatcher"
import TodoActionsTypes from "./TodoActionTypes"
import Immutable from 'immutable'

class TodoDraftStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher)
  }

  getInitialState() {
    return Immutable.Map({text: ''})
  }

  reduce(state, action) {
    switch(action.type) {
      case TodoActionsTypes.ADD_TODO:
        return state.set('text', '');
      case TodoActionsTypes.UPDATE_TODO_DRAFT:
        return state.set('text', action.text);
      default:
        return state;
    }
  }
}

export default new TodoDraftStore()