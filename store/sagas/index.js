/* exported fetch */
import { all } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import todosWatcher from './todos';
import switchWatcher from './switch';

es6promise.polyfill();

function* rootSaga() {
  yield all([
    todosWatcher(),
    switchWatcher(),
  ]);
}

export default rootSaga;
