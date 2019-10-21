import React from 'react';
import StyledSwitch from '../shared/StyledSwitch';
import StyledSpan from '../shared/StyledSpan';

const ThemeSwitch = ({ isDarkThemeEnabled, toggleSwitch }) => (
  <StyledSwitch
    role="switch"
    onClick={toggleSwitch}
    aria-checked={isDarkThemeEnabled}
  >
    <StyledSpan isActive={!isDarkThemeEnabled}>LIGHT</StyledSpan>
    <StyledSpan isActive={isDarkThemeEnabled}>DARK</StyledSpan>
  </StyledSwitch>
);

export default ThemeSwitch;
