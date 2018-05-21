import { ReduceStore } from 'flux/utils'
import TodoDispatcher from './TodoDispatcher'
import Immutable from 'immutable'
import TodoActionTypes from './TodoActionTypes'
import Counter from './Counter'
import Todo from "./Todo"

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher)
  }

  getInitialState() {
    return Immutable.OrderedMap()
  }

  reduce(state, action) {
    switch(action.type) {

      case TodoActionTypes.ADD_TODO:
        //do not allow empty text
        if (!action.text){ return state; }
        const id = Counter.increment();
        return state.set(id, new Todo({
          id,
          text: action.text,
          complete: false
        }));

      case TodoActionTypes.TOGGLE_TODO:
        return state.update(
          action.id,
          todo => todo.set('complete', !todo.complete)
        );

      case TodoActionTypes.DELETE_TODO:
        return state.remove(action.id);

      case TodoActionTypes.DELETE_COMPLETED_TODOS:
        return state.filter(
            todo => !todo.complete
        );

      case TodoActionTypes.TOGGLE_ALL_TODOS:
        const areAllCompleted = state.every(todo => todo.complete);
        return state.map(todo => todo.set('complete', !areAllCompleted));

      case TodoActionTypes.EDIT_TODO:
        return state.setIn([action.id, 'text'], action.text);

      default:
        return state;
    }
  }
}

export default new TodoStore()