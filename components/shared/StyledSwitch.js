import styled from 'styled-components';

const StyledSwitch = styled.button`
  margin-bottom: 20px;
  padding: 8px 0;
  border: 2px solid black;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  outline: none;
  &[role="switch"][aria-checked="false"] > :first-child,
  &[role="switch"][aria-checked="true"] > :last-child {
    background: ${({ theme }) => theme.colors.zemoga};
    color: ${({ theme }) => theme.colors.black};
  }
  &[role="switch"][aria-checked="false"] > :last-child,
  &[role="switch"][aria-checked="true"] > :first-child {
    color: ${({ theme }) => theme.colors.grey};
  }
  span {
    padding: 8px 10px;
    pointer-events: none;
    font-size: 15px;
    &:last-child {
      border-left: 2px solid ${({ theme }) => theme.colors.black};
    }
  }
`;


export default StyledSwitch;
