import { toggleSwitch } from '@store/actions/todos';

const switchReducer = isDarkThemeEnabled => !isDarkThemeEnabled;

const initialState = false;

function themeSwitchReducer(state = initialState, action) {
  switch (action.type) {
    case toggleSwitch.type:
      return switchReducer(state);

    default:
      return state;
  }
}

export default themeSwitchReducer;
