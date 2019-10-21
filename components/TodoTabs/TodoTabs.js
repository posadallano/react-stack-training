import React from 'react';
import StyledTabs from '@components/shared/StyledTabs';
import StyledButtonTab from '@components/shared/StyledButtonTab';

const TodoTabs = ({ toggleActiveTab, currentState }) => (
  <StyledTabs>
    <StyledButtonTab isActive={currentState === 'all'} value="all" onClick={toggleActiveTab}>ALL</StyledButtonTab>
    <StyledButtonTab isActive={currentState === 'pending'} value="pending" onClick={toggleActiveTab}>PENDING</StyledButtonTab>
    <StyledButtonTab isActive={currentState === 'done'} value="done" onClick={toggleActiveTab}>DONE</StyledButtonTab>
  </StyledTabs>
);

export default TodoTabs;
