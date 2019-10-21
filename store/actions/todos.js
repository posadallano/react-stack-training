import reduxAsyncActionFactory from '@utils/reduxAsyncActionFactory';
import reduxActionFactory from '@utils/reduxActionFactory';

export const postTodo = reduxAsyncActionFactory('POST_TODO');
export const loadTodos = reduxAsyncActionFactory('LOAD_TODOS');
export const deleteTodo = reduxAsyncActionFactory('DELETE_TODO');

export const toggleSwitch = reduxActionFactory('THEME_SWITCH');
