import { put, takeEvery } from 'redux-saga/effects';
import {
  postTodo, loadTodos, deleteTodo, isDoneTodo,
} from '@store/actions/todos';

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
        isDone: false,
      }),
    }).then(response => response.json());

    yield put(postTodo.response.creator(savedTodo, meta));
  } catch (error) {
    yield put(postTodo.failure.creator(error, meta));
  }
}

function* deleteTodoSaga(action) {
  const { payload, meta } = action;

  try {
    yield fetch(`http://localhost:3000/api/todos/${payload}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());

    yield put(deleteTodo.response.creator(payload, meta));
  } catch (error) {
    yield put(deleteTodo.failure.creator(error, meta));
  }
}

function* isDoneTodoSaga(action) {
  const { payload, meta } = action;
  const { id, isDone } = payload;

  try {
    const doneTodo = yield fetch(`http://localhost:3000/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isDone: !isDone,
      }),
    }).then(response => response.json());
    yield put(isDoneTodo.response.creator(doneTodo, meta));
  } catch (error) {
    yield put(isDoneTodo.failure.creator(error, meta));
  }
}

function* watcher() {
  yield takeEvery(postTodo.request.type, addTodoSaga);
  yield takeEvery(loadTodos.request.type, loadTodosSaga);
  yield takeEvery(deleteTodo.request.type, deleteTodoSaga);
  yield takeEvery(isDoneTodo.request.type, isDoneTodoSaga);
}

export default watcher;
