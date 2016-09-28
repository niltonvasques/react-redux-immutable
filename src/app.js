import React from 'react';
import { render } from 'react-dom';
import { List, Map } from 'immutable';
import { TodoList } from './components';

const dummyTodos = List([
  Map({ id: 0, isDone: true,  text: 'make components' }),
  Map({ id: 1, isDone: true, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]);

render(
    <TodoList todos={dummyTodos} />,
    document.getElementById('app')
);
