import styled from 'styled-components';

const StyledInput = styled.input`
  border: 0;
  border-bottom: 3px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  flex: 1;
  padding: 7px 0;
  font-size: 20px;
  font-weight: 100;
  font-family: inherit;
  line-height: 36px;
  outline: 0;
  transition: border-color ease-in-out .15s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus {
    border-bottom: 3px solid ${({ theme }) => theme.colors.zemoga};
  }
`;

export default StyledInput;
