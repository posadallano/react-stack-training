import { combineReducers } from 'redux';
import todosReducer from './todos';
import switchReducer from './themeSwitch';

const rootReducer = combineReducers({
  todos: todosReducer,
  isDarkThemeEnabled: switchReducer,
});

export default rootReducer;
