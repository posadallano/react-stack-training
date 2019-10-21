import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  padding: '20px',
  fontFamily: ({ theme }) => theme.fontFamily,
  flexWrap: 'wrap',
  background: ({ theme }) => theme.colors.white,
});

const Box = styled.div({
  flex: 1,
  maxWidth: '850px',
});

const PageWrapper = ({ children }) => (
  <Wrapper>
    <Box>
      {children}
    </Box>
  </Wrapper>
);

export default PageWrapper;
