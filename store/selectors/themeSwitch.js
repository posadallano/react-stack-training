import { createSelector } from 'reselect';

const getCurrentTheme = state => state.isDarkThemeEnabled;

export const getIsDarkEnabled = createSelector(
  [getCurrentTheme],
  currentTheme => currentTheme.active,
);

export default getIsDarkEnabled;
