import styled from 'styled-components';

const StyledSwitch = styled.button`
  margin: 0;
  padding: 0;
  width: 70px;
  height: 26px;
  border: 2px solid black;
  display: inline-block;
  margin-right: 0.25em;
  line-height: 20px;
  vertical-align: middle;
  text-align: center;
  font: 12px "Open Sans", "Arial", serif;
  span {
    padding: 0 4px;
    pointer-events: none;
  }
  [role="switch"][aria-checked="false"] :first-child,
  [role="switch"][aria-checked="true"] :last-child {
    background: #262;
    color: #eef;
  }

  [role="switch"][aria-checked="false"] :last-child,
  [role="switch"][aria-checked="true"] :first-child {
    color: #bbd;
  }

  label.switch {
  font: 16px "Open Sans", "Arial", sans-serif;
    line-height: 20px;
    user-select: none;
    vertical-align: middle;
    user-select: none;
}
`;


export default StyledSwitch;
