import styled from 'styled-components';

const StyledSwitch = styled.button`
  margin-bottom: 20px;
  padding: 0;
  border: 2px solid ${({ theme }) => theme.colors.black};
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  outline: none;
`;

export default StyledSwitch;
