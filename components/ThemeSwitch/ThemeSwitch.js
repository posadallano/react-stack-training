import React from 'react';
import StyledSwitch from '../shared/StyledSwitch';
import StyledSpan from '../shared/StyledSpan';

const ThemeSwitch = ({ isDarkThemeEnabled, dispatchSwitch }) => (
  <StyledSwitch
    role="switch"
    onClick={dispatchSwitch}
    aria-checked={isDarkThemeEnabled}
  >
    <StyledSpan isActive={!isDarkThemeEnabled}>LIGHT</StyledSpan>
    <StyledSpan isActive={isDarkThemeEnabled}>DARK</StyledSpan>
  </StyledSwitch>
);

export default ThemeSwitch;
