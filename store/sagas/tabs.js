import { put, takeEvery } from 'redux-saga/effects';
import { loadTabs, toggleTab } from '@store/actions/tabs';

function* loadTabsSaga(action) {
  const { meta } = action;

  try {
    const apiTabs = yield fetch('http://localhost:3000/api/activeTab').then(response => response.json());
    yield put(loadTabs.response.creator(apiTabs, meta));
  } catch (error) {
    yield put(loadTabs.failure.creator(error, meta));
  }
}

function* changeTabSaga(action) {
  const { payload, meta } = action;

  try {
    const savedTab = yield fetch('http://localhost:3000/api/activeTab', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        active: payload,
      }),
    }).then(response => response.json());
    yield put(toggleTab.response.creator(savedTab, meta));
  } catch (error) {
    yield put(toggleTab.failure.creator(error, meta));
  }
}

function* tabsWatcher() {
  yield takeEvery(loadTabs.request.type, loadTabsSaga);
  yield takeEvery(toggleTab.request.type, changeTabSaga);
}

export default tabsWatcher;
