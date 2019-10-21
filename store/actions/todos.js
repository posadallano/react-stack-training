import reduxAsyncActionFactory from '@utils/reduxAsyncActionFactory';

export const postTodo = reduxAsyncActionFactory('POST_TODO');
export const loadTodos = reduxAsyncActionFactory('LOAD_TODOS');
export const deleteTodo = reduxAsyncActionFactory('DELETE_TODO');
