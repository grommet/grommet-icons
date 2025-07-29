import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const X = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="X" {...props}>
    <path d="M0.058 1L9.325 13.39L0 23.462H2.099L10.262 14.642L16.858 23.462H24L14.212 10.375L22.892 1H20.792L13.275 9.122L7.2 1H0.058ZM3.145 2.546H6.425L20.913 21.916H17.633L3.145 2.546Z" fill="black"/>
  </StyledIcon>
));

X.displayName = 'X';
export { X };
