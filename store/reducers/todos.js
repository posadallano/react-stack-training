import { postTodo, loadTodos, deleteTodo } from '@store/actions/todos';

const addTodoReducer = (storeTodos, apiTodo) => (
  {
    ...storeTodos,
    [apiTodo.id]: {
      ...apiTodo,
    },
  }
);

const deleteTodoReducer = (storeTodos, idTodo) => {
  const { [idTodo]: idToDelete, ...remStoreTodos } = storeTodos;
  return remStoreTodos;
};

const mapApiTodos = apiTodos => apiTodos.reduce(addTodoReducer, {});

function todos(state = {}, action) {
  switch (action.type) {
    case loadTodos.response.type:
      return mapApiTodos(action.payload);

    case postTodo.response.type:
      return addTodoReducer(state, action.payload);

    case deleteTodo.response.type:
      return deleteTodoReducer(state, action.payload);

    default:
      return state;
  }
}

export default todos;
