import { createSelector } from 'reselect';

const savedTab = state => state.activeTab;

const currentTabSelector = createSelector(
  savedTab,
  currentTab => currentTab.active,
);

export default currentTabSelector;
