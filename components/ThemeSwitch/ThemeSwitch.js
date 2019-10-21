import React from 'react';
import StyledSwitch from '../shared/StyledSwitch';

const ThemeSwitch = ({ isToggleOn, SwitchButton }) => (
  <StyledSwitch
    role="switch"
    onClick={SwitchButton}
    aria-checked={isToggleOn}
    id="themeswitch"
  >
    <span>DARK</span>
    <span>LIGHT</span>
  </StyledSwitch>
);

export default ThemeSwitch;
