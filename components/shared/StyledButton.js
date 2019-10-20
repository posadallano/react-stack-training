import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  line-height: 17px;
  font-weight: 700;
  text-transform: lowercase;
  text-decoration: none;
  outline: 0;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.zemoga};
    color: ${({ theme }) => theme.colors.zemoga};
  }
`;

export default StyledButton;
