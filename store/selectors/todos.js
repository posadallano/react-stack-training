import { createSelector } from 'reselect';
import activeTabSelector from './currentTab';

const todosSelector = state => state.todos;

export const todosIdsSelector = createSelector(
  [todosSelector, activeTabSelector],
  (todos, activeTab) => {
    if (activeTab === 'all') {
      return Object.keys(todos);
    }
    return Object.keys(todos).filter((id) => {
      if (activeTab === 'done') {
        return todos[id].isDone;
      }
      return !(todos[id].isDone);
    });
  },
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
