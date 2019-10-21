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
  color: ${({ theme }) => theme.colors.black};

  &:before {
    content: '';
    background: ${({ theme }) => theme.colors.zemoga};
    width: 19px;
    height: 6px;
    position: absolute;
    top: 34px;
    left: 0;
  }
`;

export default StyledLi;
