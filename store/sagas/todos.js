import { put, takeEvery } from 'redux-saga/effects';
import { postTodo, loadTodos } from '@store/actions/todos';

function* loadTodosSaga(action) {
  const { meta } = action;

  try {
    const apiTodos = yield fetch('http://localhost:3000/api/todos').then(response => response.json());

    yield put(loadTodos.response.creator(apiTodos, meta));
  } catch (error) {
    yield put(loadTodos.failure.creator(error, meta));
  }
}

function* addTodoSaga(action) {
  const { payload, meta } = action;

  try {
    const savedTodo = yield fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: payload,
      }),
    }).then(response => response.json());

    yield put(postTodo.response.creator(savedTodo, meta));
  } catch (error) {
    yield put(postTodo.failure.creator(error, meta));
  }
}

function* watcher() {
  yield takeEvery(postTodo.request.type, addTodoSaga);
  yield takeEvery(loadTodos.request.type, loadTodosSaga);
}

export default watcher;
