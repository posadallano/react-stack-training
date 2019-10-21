import { createSelector } from 'reselect';

const getCurrentTheme = state => state.isDarkThemeEnabled;

export const getIsDarkEnabled = createSelector(
  [getCurrentTheme],
  currentTheme => currentTheme,
);

export default getIsDarkEnabled;
