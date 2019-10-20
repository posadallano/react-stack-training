import React from 'react';
import styled from 'styled-components';
import StyledInput from '@components/shared/StyledInput';
import StyledButton from '@components/shared/StyledButton';

const InputWrapper = styled.div({
  display: 'flex',
});

const AddTodo = ({ addTodo, inputValue, handleInputChange }) => (
  <InputWrapper>
    <StyledInput placeholder="todo goes here 🌝" type="text" value={inputValue} onChange={handleInputChange} />
    <StyledButton type="button" onClick={addTodo}>
      add
    </StyledButton>
  </InputWrapper>
);

export default AddTodo;
