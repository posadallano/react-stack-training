import React from 'react';
import StyledSwitch from '../shared/StyledSwitch';

const ThemeSwitch = ({ isDarkThemeEnabled, SwitchButton, toggleSwitch }) => (
  <StyledSwitch
    role="switch"
    onClick={() => { SwitchButton(); toggleSwitch(); }}
    aria-checked={isDarkThemeEnabled}
    id="themeswitch"
  >
    <span>LIGHT</span>
    <span>DARK</span>
  </StyledSwitch>
);

export default ThemeSwitch;
