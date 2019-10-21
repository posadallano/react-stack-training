import { loadSwitch, toggleSwitch } from '@store/actions/switch';

function themeSwitchReducer(state = false, action) {
  switch (action.type) {
    case loadSwitch.response.type:
    case toggleSwitch.response.type:
      return action.payload;

    default:
      return state;
  }
}

export default themeSwitchReducer;
