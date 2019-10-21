import React from 'react';
import StyledTabs from '@components/shared/StyledTabs';
import StyledButtonTab from '@components/shared/StyledButtonTab';

const TodoTabs = ({ toggleActiveTab, currentState }) => (
  <StyledTabs>
    <StyledButtonTab className={currentState === 'all' ? 'active' : null} value="all" onClick={toggleActiveTab}>ALL</StyledButtonTab>
    <StyledButtonTab className={currentState === 'pending' ? 'active' : null} value="pending" onClick={toggleActiveTab}>PENDING</StyledButtonTab>
    <StyledButtonTab className={currentState === 'done' ? 'active' : null} value="done" onClick={toggleActiveTab}>DONE</StyledButtonTab>
  </StyledTabs>
);

export default TodoTabs;
