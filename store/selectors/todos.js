import { createSelector } from 'reselect';

const todosSelector = state => state.todos;

export const todosIdsSelector = createSelector(
  [todosSelector],
  todos => Object.keys(todos),
);

export const makeTodoSelector = todoId => createSelector(
  [todosSelector],
  todos => todos[todoId],
);

export const makeTodoTextSelector = todoId => createSelector(
  [makeTodoSelector(todoId)],
  todo => todo.text,
);

export const makeTodoDoneSelector = todoId => createSelector(
  [makeTodoSelector(todoId)],
  done => done.isDone,
);
