import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';

const X = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="X" {...props}>
    <path fill="#000" d="m.058 1 9.267 12.39L0 23.462h2.099l8.163-8.82 6.596 8.82H24l-9.788-13.087L22.892 1h-2.1l-7.517 8.122L7.2 1H.058Zm3.087 1.546h3.28l14.488 19.37h-3.28L3.145 2.547Z"/>
  </StyledIcon>
));

X.displayName = 'X';
export { X };
