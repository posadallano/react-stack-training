import styled from 'styled-components';

const StyledTodoText = styled.span`
    flex: 1;
    color: ${({ theme, isDone }) => (isDone ? theme.colors.grey : theme.colors.black)};
`;

export default StyledTodoText;
