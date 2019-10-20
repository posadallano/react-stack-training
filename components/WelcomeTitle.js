import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-size: 90px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.zemoga};
  flex-basis: 100%;
  margin: 0;
  padding-bottom: 30px;
`;

const WelcomeTitle = () => (
  <StyledTitle>
    hello there,
    <br />
    fellow zemogian 🖖🏻
  </StyledTitle>
);

export default WelcomeTitle;
