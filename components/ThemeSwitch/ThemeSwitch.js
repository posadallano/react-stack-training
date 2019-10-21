import React from 'react';
import StyledSwitch from '../shared/StyledSwitch';

const ThemeSwitch = ({ isToggleOn, SwitchButton }) => (
  <StyledSwitch
    role="switch"
    onClick={SwitchButton}
    aria-checked={isToggleOn}
    id="themeswitch"
  >
    <span>ON</span>
    <span>OFF</span>
  </StyledSwitch>
);

export default ThemeSwitch;
