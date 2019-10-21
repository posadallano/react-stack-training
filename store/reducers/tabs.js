import { loadTabs, toggleTab } from '@store/actions/tabs';

function tabsReducer(state = 'all', action) {
  switch (action.type) {
    case loadTabs.response.type:
    case toggleTab.response.type:
      return action.payload;
    default:
      return state;
  }
}

export default tabsReducer;
