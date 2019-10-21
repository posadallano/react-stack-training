import styled from 'styled-components';

const StyledTodosButton = styled.button`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: initial;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  span {
    font-size: 20px;
    width: 20px;
    padding: 0;
    vertical-align: middle;
    line-height: 2;
    display: inline-block;
    text-align: center;
  }
`;

export default StyledTodosButton;
