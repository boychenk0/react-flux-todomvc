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
  },

  updateTodoDraft(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.UPDATE_TODO_DRAFT,
      text
    })
  },

  deleteCompletedTodos() {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_COMPLETED_TODOS,
    })
  },

  toggleAllTodos() {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_ALL_TODOS,
    })
  },

  startEditTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.START_EDIT_TODO,
      id
    })
  },

  stopEditTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.STOP_EDIT_TODO,
      id
    })
  },

  editTodo(id, text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.EDIT_TODO,
      id,
      text
    })
  }
};

export default TodoActions