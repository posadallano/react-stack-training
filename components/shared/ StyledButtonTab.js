import styled from 'styled-components';

const StyledButtonTab = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 5px;
  border: none;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.zemoga : theme.colors.grey)};
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  padding: 5px 15px;
  outline: none;
  &:first-of-type {
    margin-left: 0;
  }
`;

export default StyledButtonTab;
