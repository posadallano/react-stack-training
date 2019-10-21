import React from 'react';
import StyledLi from '@components/shared/StyledLi';
import StyledTodosButton from '@components/shared/StyledTodosButton';
import StyledTodoText from '@components/shared/StyledTodoText';

const Todo = ({
  text, deleteTodo, doneTodo, isDone,
}) => (
  <StyledLi>
    <StyledTodoText isDone={isDone} className="text">{text}</StyledTodoText>
    <StyledTodosButton onClick={doneTodo}>
      <span role="img" aria-label="Done">✅</span>
    </StyledTodosButton>
    <StyledTodosButton onClick={deleteTodo}>
      <span role="img" aria-label="Remove">❌</span>
    </StyledTodosButton>
  </StyledLi>
);

export default Todo;
