import React from 'react';
import StyledLi from '@components/shared/StyledLi';
import StyledRemoveButton from '@components/shared/StyledRemoveButton';

const Todo = ({ text, deleteTodo }) => (
  <StyledLi>
    <span className="text">{text}</span>
    <StyledRemoveButton onClick={deleteTodo}>
      <span role="img" aria-label="Remove">❌</span>
    </StyledRemoveButton>
  </StyledLi>
);

export default Todo;
