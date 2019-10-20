/* exported fetch */
import { all } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import todosWatcher from './todos';

es6promise.polyfill();

function* rootSaga() {
  yield all([
    todosWatcher(),
  ]);
}

export default rootSaga;
