import styled from 'styled-components';

const StyledSpan = styled.button`
    padding: 8px 10px;
    pointer-events: none;
    font-size: 15px;
    border: none;
    background: ${({ theme, isActive }) => (isActive ? theme.colors.zemoga : theme.colors.white)};
    color: ${({ theme, isActive }) => (isActive ? theme.colors.black : theme.colors.grey)};
    &:last-child {
      border-left: 2px solid ${({ theme }) => theme.colors.black};
    }
`;

export default StyledSpan;
