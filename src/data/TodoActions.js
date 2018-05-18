import TodoActionTypes from './TodoActionTypes'
import TodoDispatcher from './TodoDispatcher'

const TodoActions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text
    })
  },

  toggleTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id
    })
  },

  deleteTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id
    })
  }
};

export default TodoActions