import React from 'react';
import StyledSwitch from '../shared/StyledSwitch';

const ThemeSwitch = () => (
  <StyledSwitch
    role="switch"
    aria-checked="true"
    id="themeswitch"
    // onClick={onClickSwitchButton}
  >
    <span>ON</span>
    <span>OFF</span>
  </StyledSwitch>
);

export default ThemeSwitch;
