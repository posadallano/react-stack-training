import { put, takeEvery, select } from 'redux-saga/effects';
import { loadSwitch, toggleSwitch } from '@store/actions/switch';
import { getIsDarkEnabled } from '../selectors/themeSwitch';

function* loadSwitchSaga(action) {
  const { meta } = action;

  try {
    const apiSwitch = yield fetch('http://localhost:3000/api/isDarkThemeEnabled').then(response => response.json());
    yield put(loadSwitch.response.creator(apiSwitch, meta));
  } catch (error) {
    yield put(loadSwitch.failure.creator(error, meta));
  }
}

function* changeSwitchSaga(action) {
  const { meta } = action;

  try {
    const isDarkEnabled = yield select(getIsDarkEnabled);
    const savedSwitch = yield fetch('http://localhost:3000/api/isDarkThemeEnabled', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        active: !isDarkEnabled,
      }),
    }).then(response => response.json());
    yield put(toggleSwitch.response.creator(savedSwitch, meta));
  } catch (error) {
    yield put(toggleSwitch.failure.creator(error, meta));
  }
}

function* switchWatcher() {
  yield takeEvery(loadSwitch.request.type, loadSwitchSaga);
  yield takeEvery(toggleSwitch.request.type, changeSwitchSaga);
}

export default switchWatcher;
