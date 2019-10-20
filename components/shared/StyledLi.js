import styled from 'styled-components';

const StyledLi = styled.li`
  position: relative;
  padding: 0;
  padding-left: 40px;
  padding-top: 20px;
  font-weight: 100;
  font-size: 20px;
  line-height: 36px;
  min-height: 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  &:before {
    content: '';
    background: ${({ theme }) => theme.colors.zemoga};
    width: 19px;
    height: 6px;
    position: absolute;
    top: 34px;
    left: 0;
  }

  span.text,
  button {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
  button {
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
  }
  span.text {
    flex: 1;
  }
`;

export default StyledLi;
