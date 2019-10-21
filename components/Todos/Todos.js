import React from 'react';
import StyledUl from '@components/shared/StyledUl';
import Todo from './Todo';

const Todos = ({ todosIds }) => (
  <StyledUl>
    {console.log(todosIds)}
    {todosIds.map(todoId => (
      <Todo
        key={todoId}
        id={todoId}
      />
    ))}
  </StyledUl>
);

export default Todos;
