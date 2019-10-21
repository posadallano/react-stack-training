import { combineReducers } from 'redux';
import todosReducer from './todos';
import switchReducer from './themeSwitch';
import tabsReducer from './tabs';

const rootReducer = combineReducers({
  todos: todosReducer,
  isDarkThemeEnabled: switchReducer,
  activeTab: tabsReducer,
});

export default rootReducer;
