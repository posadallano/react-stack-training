import React from 'react';
import StyledLi from '@components/shared/StyledLi';

const Todo = ({ text, deleteTodo }) => (
  <StyledLi>
    <span className="text">{text}</span>
    <button type="button" onClick={deleteTodo}>
      <span role="img" aria-label="Remove">❌</span>
    </button>
  </StyledLi>
);

export default Todo;
