import React from 'react';
import StyledTabs from '@components/shared/StyledTabs';
import StyledButtonTab from '@components/shared/StyledButtonTab';

const TodoTabs = ({ toggleActiveTab }) => (
  <StyledTabs>
    <StyledButtonTab value="all" onClick={toggleActiveTab}>ALL</StyledButtonTab>
    <StyledButtonTab value="pending" onClick={toggleActiveTab}>PENDING</StyledButtonTab>
    <StyledButtonTab value="done" onClick={toggleActiveTab}>DONE</StyledButtonTab>
  </StyledTabs>
);

export default TodoTabs;
