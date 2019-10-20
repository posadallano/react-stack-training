import { postTodo, loadTodos } from '@store/actions/todos';

const addTodoReducer = (storeTodos, apiTodo) => (
  {
    ...storeTodos,
    [apiTodo.id]: {
      ...apiTodo,
    },
  }
);

const mapApiTodos = apiTodos => apiTodos.reduce(addTodoReducer, {});

function todos(state = {}, action) {
  switch (action.type) {
    case loadTodos.response.type:
      return mapApiTodos(action.payload);

    case postTodo.response.type:
      return addTodoReducer(state, action.payload);

    default:
      return state;
  }
}

export default todos;
