import Immutable from 'immutable'

const Todo = Immutable.Record({
  id: '',
  text: '',
  complete: false
});

export default Todo