import React from 'react';
import StyledLi from '@components/shared/StyledLi';

const Todo = ({ text }) => (
  <StyledLi>
    {text}
  </StyledLi>
);

export default Todo;
