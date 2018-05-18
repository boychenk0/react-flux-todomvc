import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import TodoActions from './data/TodoActions'

ReactDOM.render(<AppContainer />, document.getElementById('todoapp'));
registerServiceWorker();

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');